import React from "react";
import ChatHeaderInterface from "../../interfaces/layouts/ChatHeaderInterface";

const ChatHeader: React.FC<ChatHeaderInterface> = ({name, profilePicture}: ChatHeaderInterface) => {
    return(
        <>
            <div className="chat-header w-full z-10 absolute">
                <div className="chat-header__info flex justify-between items-center px-4 py-3 bg-slate-900">
                    <div className="chat-header__info__left flex items-center">
                        <div className="chat-header__info__left__avatar pr-4">
                            <figure className='w-12 h-12 rounded-full bg-slate-400 overflow-hidden'>
                                {profilePicture ? <img src={profilePicture} alt={profilePicture + '- Image'}/> : null}
                            </figure>
                        </div>
                        <div className="chat-header__info__left__name">
                            <h3 className="text-white font-semibold">{name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatHeader;