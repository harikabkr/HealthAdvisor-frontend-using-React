import axios from 'axios';
import { CHAT_BACKEND_EXPRESS_URL, OPENAI_CHAT_COMPLETION_URL } from '../utils/urls';


export const chatService = {
    async getMessageReplyFromOpenAi(chatMessage) {
        const requestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [{
                "role": "user",
                "content": chatMessage
            }]
        }
        const response = await axios.post(
            OPENAI_CHAT_COMPLETION_URL,
            requestBody, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.REACT_APP_OPENAPI_KEY}`,
                },
            }
        );
        console.log('Returned response - ', response);
        const {
            data,
            status
        } = response;
        if (status !== 200) return [null, response];
        const {
            message,
            finish_reason
        } = data.choices[0];
        const {
            role,
            content
        } = message;
        return [content, null];
    },
   
    async getReplyFromExpressService(requestBody) {
        const response = await axios.post(
            CHAT_BACKEND_EXPRESS_URL + '/api/getChatReply',
            requestBody, {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log('> Response From Express: ', response);
        const {
            data,
            status
        } = response;
        if (status !== 200) {
            const responseError = new Error(`${status} - ERROR FETCHING RESPONSE FROM API`, data);
            console.Error('> Error fetching reply from backend : ', responseError);
            return [null, responseError];
        }
        const { reply } = data;
        return [reply, null];
    },

    async getReplyForSelectedFeature(requestBody) {
        const response = await axios.post(
            CHAT_BACKEND_EXPRESS_URL + '/api/getChatReplyV2',
            requestBody, {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log('> Response From Express: ', response);
        const {
            data,
            status
        } = response;
        if (status !== 200) {
            const responseError = new Error(`${status} - ERROR FETCHING RESPONSE FROM API`, data);
            console.Error('> Error fetching reply from backend : ', responseError);
            return [null, responseError];
        }
        return [data, null];
    },

}