import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

export const useChatHisoryState = () => {
    const { user } = useAuth0();
    const [chatHistory, setChatHistory] = useState([]);
    return { user, chatHistory, setChatHistory };
}