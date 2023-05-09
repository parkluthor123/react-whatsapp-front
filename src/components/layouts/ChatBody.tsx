import React, { useContext, useEffect, useRef } from "react";
import Ballons from "../Ballons";
import { MessageContext } from "../../contexts/MessageContext";
import moment from "moment";

const ChatBody: React.FC = (props) => {
    const { messages } = useContext(MessageContext)
    const chatContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollToBottom = chatContainer.current
        if(scrollToBottom)
        {  
            scrollToBottom.scrollTo({
                top: scrollToBottom.scrollHeight,
                behavior: 'smooth'
            })
        }

    }, [messages])

    return(
        <>
            <div ref={chatContainer} className="chat-body__messages w-full px-4 py-3 overflow-y-scroll pb-20 pt-20 bg-slate-600 h-screen absolute top-0 max-h-full">
                {messages.length > 0 ?
                    messages.map(({MessageText, fromMe, idMessage, isMessageFromResponse, messageTimestamp ,isMessageFromStatus}, index) => {
                        // convert timestamp to date with moment
                        const createdHour = moment.unix(messageTimestamp).format('HH:mm')
                        return(
                            <Ballons 
                                key={index} 
                                hour={createdHour}
                                messageText={MessageText} 
                                fromMe={fromMe} 
                                idMessage={idMessage}
                                isMessageFromResponse={isMessageFromResponse}
                                isMessageFromStatus={isMessageFromStatus}
                            />
                        )
                    }) : null }
            </div>
        </>
    )
}

export default ChatBody;