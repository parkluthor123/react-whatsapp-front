import React from "react";

const NoSelectedUser: React.FC = () => {
    return(
        <>
            <div className="chat-body__messages w-full px-4 py-3 overflow-y-scroll pb-20 pt-20 bg-slate-600 h-screen absolute top-0 max-h-full">
                <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-slate-400 text-lg font-semibold mt-4">Selecione um usuário para iniciar uma conversa</h3>
                </div>
            </div>
        </>
    )
}

export default NoSelectedUser;