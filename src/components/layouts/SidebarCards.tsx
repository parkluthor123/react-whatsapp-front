import React, { useContext, useState } from "react";
import { MessageContext } from "../../contexts/MessageContext";
import SidebarCardsInterface from "../../interfaces/layouts/SidebarCardsInterface";
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import api from "../../services/api";

const SidebarCards: React.FC<SidebarCardsInterface> = ({lastMessage, name, remoteJid, profilePicture, lastItem}: SidebarCardsInterface) => {
    
    const { getMessagesByUser, setData } = useContext(MessageContext)
    const [modal, setModal] = useState<boolean>(false)
    const [username, setUsername] = useState<string>('')

    const savePreferences = async () => {
        setModal(false)
        try {
            const res = await api.post('/messages/update-name', {
                remoteJid,
                username
            })

            if(res.status == 200)
            {
                setData(res.data)
            }
        } catch (e: any) {
            console.log(e.message)
        }
    }

    return(
        <>

            {modal &&
                <div className="modal fixed z-20 w-full h-full top-0 left-0 flex items-center shadow-xl justify-center">
                    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                    <div className="modal-container bg-slate-900 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold">Escolha um nome:</p>
                                <div className="modal-close cursor-pointer z-50" onClick={()=> setModal(false)}>
                                    <XMarkIcon className="w-8 h-8"/>
                                </div>
                            </div>

                            <div className="modal-body">
                                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Escolha um nome..." className="mt-1 pl-4 block w-full rounded-md shadow-sm text-black" />
                            </div>
                            <div className="modal-footer">
                                <div className="flex justify-end items-center mt-5">
                                    <button onClick={savePreferences} className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Salvar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
                        
        
            <div className="card-container relative z-0">
                <span onClick={()=> setModal(!modal)} className="card-options w-8 h-8 right-4 z-10 flex justify-center items-center top-[30%] cursor-pointer rounded-full bg-slate-500 absolute">
                    <PencilIcon className="w-4 h-4"/>
                </span>
                <button onClick={()=> getMessagesByUser(remoteJid)} className="px-4 py-6 w-full hover:bg-slate-900 hover:transition-all" type="button">
                    <div className="chat-card flex items-center">
                        <div className="chat-card__avatar pr-4">
                            <figure className='w-12 h-12 rounded-full bg-slate-400 overflow-hidden'>
                                {profilePicture ? <img src={profilePicture} alt={name + '- Image'}/> : null}
                            </figure>
                        </div>
                        <div className="chat-card__name flex flex-col items-start">
                            <h3 className="text-white font-semibold">{name}</h3>
                            <p className="text-slate-400 text-xs">{lastMessage}</p>
                        </div>
                    </div>
                </button>
                {lastItem && 
                    <div className="px-4">
                        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-600"></hr>
                    </div>
                }
            </div>
        </>
    )
}

export default SidebarCards;