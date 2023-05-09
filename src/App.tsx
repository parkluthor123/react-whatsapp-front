import React, { useEffect, useState, useContext } from 'react';
import useSocket from './hooks/useSocket';
import ChatSidebar from './components/layouts/ChatSidebar';
import ChatBody from './components/layouts/ChatBody';
import FieldInput from './components/layouts/FieldInput';
import ChatHeader from './components/layouts/ChatHeader';
import NoSelectedUser from './components/NoSelectedUser';
import UserInterface from './interfaces/UserInterface';
import { MessageContext } from './contexts/MessageContext';

function App() {
  const { users, messages } = useContext(MessageContext)
  const currentUser = messages[0]

  return (
    <>
      <div className="container h-screen w-screen mx-auto flex justify-center items-center">
        <div className="chat-wrapper flex w-full max-w-6xl h-5/6 rounded-lg overflow-hidden shadow-lg">
          <ChatSidebar users={users}/>
          <div className="chat-container w-full relative">
            {currentUser != undefined ?
                <>
                  <ChatHeader 
                      name={currentUser.username?.length > 0 ? currentUser.username : currentUser.remoteJid.split('@')[0]}  
                      profilePicture={currentUser.profilePicture}
                  />
                  
                  <ChatBody />
                  <FieldInput remoteJid={currentUser.remoteJid}/>
                </> : <NoSelectedUser />
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
