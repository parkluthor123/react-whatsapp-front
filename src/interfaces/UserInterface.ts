export default interface UserInterface {
    username: string;
    profilePicture: string;
    remoteJid: string;
    lastMessage?: string;
    fromMe?: boolean;
}