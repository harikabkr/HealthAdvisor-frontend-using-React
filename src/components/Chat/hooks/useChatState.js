import { useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { getConversationId, getIsNewChat, getSelectedFeature } from "../../../selectors/chatSelectors";

export const useChatState = () => {
    const isNewChat = useSelector(getIsNewChat);
    const conversationId = useSelector(getConversationId);
    const selectedFeature = useSelector(getSelectedFeature);
    const { user } = useAuth0();
    const messagesEndRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");
    const [chatMessageList, setChatMessageList] = useState([]);
    const [chatHistory, setChatHistory] = useState([]);
    return {
        user,
        isNewChat,
        selectedFeature,
        conversationId,
        messagesEndRef,
        loading,
        setLoading,
        currentMessage,
        setCurrentMessage,
        chatMessageList,
        setChatMessageList,
        chatHistory,
        setChatHistory,
    }

}