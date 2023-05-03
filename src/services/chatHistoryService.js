import axios from 'axios';
import { CHAT_BACKEND_EXPRESS_URL } from '../utils/urls';

export const chatHistoryService = {
    // getChatHistoryForUser is a legacy service to fetch the chat history by userId
    async getChatHistoryForUser(requestBody) {
        const headers = { "Content-Type": "application/json" };
        const response = await axios.post(
            CHAT_BACKEND_EXPRESS_URL + '/api/getChatHistory',
            requestBody, {headers} 
        );
        const { data, status } = response;
        if (status !== 200){
            const responseError = new Error(`${status} - Failure in retrieving Chat History`, data);
            console.Error('> Error retrieving Chat History : ', responseError);
            return [null, responseError];
        }
        console.log('> Recieved Chat History : ', data.length);
        return [data,null]
    },

    async getChatHistoryByUser(requestBody) {
        const headers = { "Content-Type": "application/json" };
        const response = await axios.post(
            CHAT_BACKEND_EXPRESS_URL + '/api/getChatHistoryByUserID',
            requestBody, {headers} 
        );
        const { data, status } = response;
        if (status !== 200){
            const responseError = new Error(`${status} - Failure in retrieving Chat History`, data);
            console.Error('> Error retrieving Chat History : ', responseError);
            return [null, responseError];
        }
        console.log('> Recieved Chat History : ', data.length);
        return [data,null]
    }
}
