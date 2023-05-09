export default interface SocketInterface {
    on: (event: string, callback: (data: any) => void) => void;
    disconnect: () => void;
    emit: (event: string, data: any) => void;
}