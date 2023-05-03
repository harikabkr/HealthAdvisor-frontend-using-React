import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        conversationDetails: {
            feature: '',
            id: '',
        },
        newChat: false,
        history: [],
    },
    reducers: {
        setConversation: (state, action) => {
            state.conversationDetails = action.payload
        },
        setConversationId: (state, action) => {
            state.conversationDetails.id = action.payload
        },
        setSelectedFeature: (state, action) => {
            state.conversationDetails.feature = action.payload
        },
        setNewChat: (state, action) => {
            state.newChat = action.payload
        },
        addToHistory: (state, action) => {
            state.history = [ ...state.history, action.payload ]
        }
    }
});

export const { setConversation, setConversationId, setSelectedFeature, setNewChat, addToHistory } = chatSlice.actions;

export default chatSlice.reducer;