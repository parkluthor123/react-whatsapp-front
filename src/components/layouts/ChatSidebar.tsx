import React from "react";
import { MegaphoneIcon, ArrowLeftOnRectangleIcon} from '@heroicons/react/24/solid'
import SidebarCards from "./SidebarCards";
import UserInterface from "../../interfaces/UserInterface";

type ChatSidebarProps = {
    users: Array<UserInterface>
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({users}: ChatSidebarProps) => {
    return(
        <>
            <div className="chat-sidebar bg-slate-800 w-2/5">
                <div className="chat-header flex justify-between gap-4 p-4 h-[10.24%]">
                    <button type="button" className="flex flex-col items-center">
                        <ArrowLeftOnRectangleIcon className="w-6 h-6"/>
                        <small>Sair</small>
                    </button>
                    <button type="button" className="flex flex-col items-center">
                        <MegaphoneIcon className="w-6 h-6"/>
                        <small>Transmissão</small>
                    </button>
                </div>
                <div className="sidebar-title h-[8.72%]">
                    <h3 className="text-white font-semibold text-4xl px-4 py-3">Conversas</h3>
                </div>
                <div className="sidebar-content h-[81%] overflow-y-scroll">
                    <div className="sidebar-items">
                        {users.length > 0 ? users.map(({profilePicture, username, lastMessage, remoteJid, fromMe}: UserInterface, index: number) => {
                            return(
                                <SidebarCards 
                                    key={index} 
                                    name={username?.length > 0 ? username : remoteJid.split('@')[0]} 
                                    profilePicture={profilePicture} 
                                    lastMessage="Ultima mensagem" 
                                    remoteJid={remoteJid}
                                    lastItem={index === users.length - 1 ? false : true}
                                />
                            )
                        }) : <p className="text-white text-md mt-16 font-semibold text-center">Nenhuma conversa</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatSidebar