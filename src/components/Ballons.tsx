import React from "react";
import BallonsInterface from "../interfaces/BallonsInterface";

const Ballons: React.FC<BallonsInterface> = ({fromMe, messageText, idMessage, hour, isMessageFromResponse, isMessageFromStatus}: BallonsInterface) => {

    return(
        <>
            <div className="chat-body__messages w-full px-4 py-3 bg-slate-600">
                <div className={`chat-body__messages__message flex items-start ${fromMe ? "justify-start" : "justify-end"} mb-4`}>
                    <div className="chat-body__messages__message__content flex flex-col">

                        {isMessageFromResponse?.isFromResponse && 
                            <div className="chat-body__messages__message__content__text_response py-3 px-3 rounded-lg bg-gray-800 mt-2 max-w-xs">
                                <p className="text-white font-normal opacity-60">Você</p>
                                <div className="chat-body__messages__message__content__text_response__message flex items-center bg-gray-700 rounded-md px-4 my-3 py-3 shadow-lg">
                                    <small className="text-white font-normal">{isMessageFromResponse.text}</small>
                                </div>
                                <div className={`chat-body__messages__message__content__text ${fromMe ? "bg-slate-900" : "bg-neutral-700"} max-w-xs shadow-lg rounded-lg px-4 py-3`}>
                                    <div className="chat-body__messages__message__content__hour flex items-end flex-col">
                                        <p className="text-slate-400 text-xs ml-2">{hour}</p>
                                        <div className={`chat-body__messages__message__content mt-2 relative ${fromMe ? "triangle-left" : "triangle-right"}`}>
                                            <p className="text-white font-normal">{messageText}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {!isMessageFromResponse?.isFromResponse && isMessageFromStatus?.isFromStatus && 
                            <div className="chat-body__messages__message__content__text_response py-3 px-3 rounded-lg bg-gray-800 mt-2 max-w-xs">
                                <p className="text-white font-normal opacity-60">Respondendo - Status</p>
                                <div className="chat-body__messages__message__content__text_response__message flex items-center bg-gray-700 rounded-md px-4 my-3 py-3 shadow-lg">
                                    <img src={isMessageFromStatus.thumbnail} alt="Thumbnail" className="w-16 h-16 rounded-md mr-3" />
                                </div>
                                <div className={`chat-body__messages__message__content__text ${fromMe ? "bg-slate-900" : "bg-neutral-700"} max-w-xs shadow-lg rounded-lg px-4 py-3`}>
                                    <div className="chat-body__messages__message__content__hour flex items-end flex-col">
                                        <p className="text-slate-400 text-xs ml-2">{hour}</p>
                                        <div className={`chat-body__messages__message__content mt-2 relative ${fromMe ? "triangle-left" : "triangle-right"}`}>
                                            <p className="text-white font-normal">{isMessageFromStatus.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                        {!isMessageFromResponse?.isFromResponse && !isMessageFromStatus?.isFromStatus &&
                             <div className={`chat-body__messages__message__content__text ${fromMe ? "bg-slate-900" : "bg-neutral-700"} max-w-xs shadow-lg rounded-lg px-4 py-3 mt-2 max-w-xs`}>
                                <div className="chat-body__messages__message__content__hour flex items-end flex-col">
                                    <p className="text-slate-400 text-xs ml-2">{hour}</p>
                                    <div className={`chat-body__messages__message__content mt-2 relative ${fromMe ? "triangle-left" : "triangle-right"}`}>
                                        <p className="text-white font-normal">{messageText}</p>
                                    </div>
                                </div>
                            </div> 
                        }  

                    </div>
                </div>
            </div>
        </>
    )
}

export default Ballons;