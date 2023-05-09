export default interface BallonsInterface {
    fromMe: boolean;
    idMessage: string;
    messageText: string;
    hour: string;
    isMessageFromStatus?: {
        isFromStatus: boolean;
        text: string;
        thumbnail: string;
    };
    isMessageFromResponse?: {
        isFromResponse: boolean;
        text: string;
    };
    isMessageFromImage?: string
}