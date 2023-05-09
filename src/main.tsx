import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/base.css'
import MessageContextProvider from './contexts/MessageContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MessageContextProvider>
      <App />
    </MessageContextProvider>
  </React.StrictMode>,
)
