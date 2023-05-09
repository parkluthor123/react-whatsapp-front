import React, { useContext, useRef } from "react";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { MessageContext } from "../../contexts/MessageContext";

type FieldInputProps = {
    remoteJid: string;
}

const FieldInput: React.FC<FieldInputProps> = ({remoteJid}: FieldInputProps) => {
    const [textMessage, setTextMessage] = React.useState<string>('')
    const { sendMessage } = useContext(MessageContext)
    const inputTextElement = useRef<HTMLInputElement>(null)

    const handleSendMessage = () => {
        const inputText = inputTextElement.current
        if(textMessage.length > 0){
            sendMessage({
                remoteJid,
                message: textMessage
            })
            setTextMessage('')
            if(inputText){
                inputText.value = ''
            }
        }
    }

    return(
        <>
            <div className="chat-footer w-full absolute bottom-0 bg-slate-900">
                <div className="chat-footer__input flex items-center px-4 py-3">
                    <div className="chat-footer__input__field w-full">
                        <input onKeyUp={(e)=> e.key === 'Enter' ? handleSendMessage() : null} ref={inputTextElement} type="text" onChange={(e) => setTextMessage(e.target.value)} className="w-full bg-slate-900 text-white focus:outline-none" placeholder="Digite uma mensagem..." />
                    </div>
                    <div className="chat-footer__input__send pl-4">
                        <button onClick={handleSendMessage} className="bg-cyan-500 shadow-lg text-white rounded-full w-10 h-10 flex justify-center items-center">
                            <PaperAirplaneIcon className="w-6 h-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FieldInput;