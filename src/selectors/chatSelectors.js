const getChatState = (state) => state.chat;
export const getIsNewChat = (state) => getChatState(state).newChat || false;
export const getConversationInfo = (state) => getChatState(state).conversationDetails;
export const getConversationId = (state) => getConversationInfo(state).id;
export const isConversationStarted = (state) => getConversationInfo(state).started;
export const getSelectedFeature = (state) => getConversationInfo(state).feature;
export const getHistory = (state) => getChatState(state).history;