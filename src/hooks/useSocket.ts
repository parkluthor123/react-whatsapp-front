import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import SocketInterface from '../interfaces/SocketInterface';

const useSocket = (url: string): SocketInterface => {
  const [socket, setSocket] = useState<SocketInterface | null>(null);

  useEffect(() => {
    const newSocket = io(url);
    setSocket(newSocket);
  }, [url]);

  return socket as SocketInterface;
};

export default useSocket;