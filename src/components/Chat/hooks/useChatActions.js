import { chatService } from "../../../services/chatService";
import { useDispatch } from "react-redux";
import { setConversationId, setNewChat, setSelectedFeature } from "../../../reducers/chatReducer";
import { chatHistoryService } from "../../../services/chatHistoryService";
import { mapChatHistory } from "../../../utils/mapChatHistory";

export const useChatActions = (props) => {
  const dispatch = useDispatch();
  const {
    user,
    selectedFeature,
    isNewChat,
    conversationId,
    setLoading,
    currentMessage,
    setCurrentMessage,
    chatMessageList,
    setChatMessageList,
    setChatHistory,
  } = props;

  const handlePredefinedFeatures = (predefinedFeatureMessageObj) => {
    if (!predefinedFeatureMessageObj) return;
    const { feature } = predefinedFeatureMessageObj;
    const messagesList = [...chatMessageList, predefinedFeatureMessageObj];
    dispatch(setSelectedFeature(feature));
    setChatMessageList(messagesList);
  };

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const fetchApiResponse = async (messages) => {
    console.log("user information > ", user);
    console.log(
      "MAKE API CALL TO FETCH RESPONSE FOR THE CHAT: ",
      currentMessage
    );
    const reqBody = {
      userId: user.sub,
      chatId: conversationId,
      selectedFeature,
      newChat: isNewChat,
      message: currentMessage,
    };
    const [response, error] = await chatService.getReplyForSelectedFeature(
      reqBody
    );
    if(error){
        console.error('ERROR in Retrieving Reply from Backend !!!', error);
    }
    const { chatId, reply } = response;
    if (isNewChat) {
        dispatch(setConversationId(chatId));
        dispatch(setNewChat(false));
    }
    setLoading(false);
    const replyObj = {
      sender: "ai",
      message: reply,
    };
    setChatMessageList([...messages, replyObj]);
  };

  const sendMessage = () => {
    if (currentMessage) {
      setLoading(true);
      const message = {
        sender: "user",
        message: currentMessage,
      };
      const messagesList = [...chatMessageList, message];
      setChatMessageList(messagesList);
      fetchApiResponse(messagesList);
      setCurrentMessage("");
    }
  };

  const fetchPreviousConversations = async () => {
    const reqBody = {
      userId: user.sub,
      pagination: {
        offset: 0,
        limit: 5,
      },
    };
    const [chatHistoryRecords, errorRetrievingRecords] =
      await chatHistoryService.getChatHistoryForUser(reqBody);
    if (errorRetrievingRecords) {
      console.error("> Error Retrieving History: ", errorRetrievingRecords);
      setChatHistory([]);
      return [];
    }
    console.log("> Retrieved Chat History: ", chatHistoryRecords.length);
    const mappedHistoryRecords = mapChatHistory(chatHistoryRecords);
    setChatHistory(mappedHistoryRecords);
    return mappedHistoryRecords;
  };

  return {
    handlePredefinedFeatures,
    handleMessageChange,
    sendMessage,
    fetchPreviousConversations,
  };
};
