import { chatHistoryService } from "../../../services/chatHistoryService";

export const useChatHisoryActions = (props) => {
    const { user, setChatHistory } = props;
    const fetchChatHistory = async() => {
        const reqBody = {
            userId: user.sub,
            pagination: {
                offset: 0,
                limit: 5
            }
        }
        const [response, error] = await chatHistoryService.getChatHistoryByUser(reqBody);
        if(error){
            console.error('ERROR in Retrieving History from Backend !!!', error);
        }
        const { records } = response;
        console.log("Chat History Retrieved : ", records.length);
        setChatHistory(records);
    };

    return { fetchChatHistory };
};