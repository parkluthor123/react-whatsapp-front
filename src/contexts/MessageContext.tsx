import { createContext, useEffect, useState } from "react";
import useSocket from "../hooks/useSocket";
import SendMessageInterface from "../interfaces/SendMessageInterface";
import api from "../services/api";

type MessageContextType = {
    isConnected: boolean;
    messages: any[];
    users: any[];
    socket: any;
    data: any[];
    setData: (data: React.SetStateAction<any[]>) => void;
    getMessagesByUser: (remoteJid: string) => void;
    sendMessage: (data: SendMessageInterface) => void;
}

export const MessageContext = createContext({} as MessageContextType);

const MessageContextProvider = ({ children }: any) => {

    const socket = useSocket('http://localhost:8000')
    const [data, setData] = useState<any[]>([])
    const [isConnected, setIsConnected] = useState(false);
    const [users, setUser] = useState<any[]>([]);

    // Captura as mensagens do usuario selecionado
    const [messages, setMessages] = useState<any[]>([]);

    const getMessages = async () => {
        try {
          const response = await api.get('/messages')
          if(response.status === 200){
            setData(response.data)
          }
        }catch(e: any){
          console.log(e)
        }
    }

    const getUsers = ()=>{
        const filteredUsers = data.reduce((acc: any, item: any) => {
            const find = acc.find((user: any) => user.remoteJid === item.remoteJid)
            if(!find){
              acc.push({
                username: item.username,
                profilePicture: item.profilePicture,
                remoteJid: item.remoteJid,
                fromMe: item.fromMe,
              })
            }
            return acc
        }, [])
        setUser(filteredUsers)
    }

    const sendMessage = (data: SendMessageInterface) => {
        try {
            if(socket){
                socket.emit('messages', data)
            }
        } catch (e: any) {
            console.log(e.message)
        }
    }

    const getMessagesByUser = (remoteJid: string) => {
        const messagesByUser = data.filter((item: any) => item.remoteJid === remoteJid)
        if(messagesByUser.length > 0){
            setMessages(messagesByUser)
        }
    }

    useEffect(()=>{
        if(socket){

            socket.on('connect', ()=>{
                setIsConnected(true)
                console.log('Conectado')
            })

            // socket.on('disconnect', ()=>{
            //   setIsConnected(false)
            // })

            socket.on('messages', (message)=>{
                // console.log(message)
                setData(message)
            })
        }
    }, [socket])

    useEffect(() => {
        getMessages()
    }, [])

    useEffect(()=>{
        // console.log(data)
        if(messages.length > 0){
            getMessagesByUser(messages[0].remoteJid)
        }
        if(data.length === 0){
            setMessages([])
        }

        getUsers()
    }, [data])
    
    
    return (
        <MessageContext.Provider value={{
            isConnected,
            messages,
            socket,
            data,
            users,
            sendMessage,
            setData,
            getMessagesByUser
        }}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContextProvider;