export const mapChatHistory = (chatHistoryRecords) => {
    const mappedHistoryRecords = chatHistoryRecords.map((historyRecord) => {
        return [{
            sender: 'ai',
            message: historyRecord.aiReply,
        }, {
            sender: 'user',
            message: historyRecord.userMessage,
        }];
    });
    return mappedHistoryRecords.flat(1).reverse();
}