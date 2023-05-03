// fetchPreviousConversations()
// .then((records) => {
//   console.log(records);
//   if (records.length > 0) {
//     setChatMessageList([...records, welcomeMessage]);
//   } else {
//     setChatMessageList([welcomeMessage]);
//   }
// })
// .catch((error) => {
//   console.log("> Error Retrieving Previous Conversations", error);
//   // const welcomeMessage={
//   //     id: 0, sender: "ai", message: WELCOME_MESSAGE
//   // };
//   setChatMessageList([welcomeMessage]);
// });


// const dispatch = useDispatch();
  // const isNewChat = useSelector(getIsNewChat);
  // const { user } = useAuth0();
  // const messagesEndRef = useRef(null);
  // const [loading, setLoading] = useState(false);
  // const [userInput, setUserinput] = useState("");
  // const [chatMessages, setChatMessages] = useState([]);
  // const [chatHistory, setChatHistory] = useState([]);

  // const handleMessageChange = (event) => {
  //   setUserinput(event.target.value);
  // };

  // const sendMessage = () => {
  //   if (userInput) {
  //     setLoading(true);
  //     const message = {
  //       sender: "user",
  //       message: userInput,
  //     };
  //     const messagesList = [...chatMessages, message];
  //     setChatMessages(messagesList);
  //     fetchApiResponse(messagesList);
  //     setUserinput("");
  //   }
  // };

  // const fetchApiResponse = async (messages) => {
  //   console.log("user information > ", user);
  //   console.log("MAKE API CALL TO FETCH RESPONSE FOR THE CHAT: ", userInput);
  //   const reqBody = { userId: user.sub, message: userInput };
  //   const [chatReply, error] = await chatService.getReplyFromExpressService(
  //     reqBody
  //   );
  //   setLoading(false);
  //   const replyObj = {
  //     sender: "ai",
  //     message: chatReply,
  //   };
  //   setChatMessages([...messages, replyObj]);
  // };

  // const handlePredefinedFeatures = (predefinedFeatureMessageObj) => {
  //   if (!predefinedFeatureMessageObj) return;
  //   const { feature } = predefinedFeatureMessageObj;
  //   const messagesList = [...chatMessages, predefinedFeatureMessageObj];
  //   dispatch(setSelectedFeature(feature));
  //   setChatMessages(messagesList);
  // };

  // const fetchPreviousConversations = async () => {
  //   const reqBody = {
  //     userId: user.sub,
  //     pagination: {
  //       offset: 0,
  //       limit: 5,
  //     },
  //   };
  //   const [chatHistoryRecords, errorRetrievingRecords] =
  //     await chatHistoryService.getChatHistoryForUser(reqBody);
  //   if (errorRetrievingRecords) {
  //     console.error("> Error Retrieving History: ", errorRetrievingRecords);
  //     setChatHistory([]);
  //     return [];
  //   }
  //   console.log("> Retrieved Chat History: ", chatHistoryRecords.length);
  //   const mappedHistoryRecords = mapChatHistory(chatHistoryRecords);
  //   setChatHistory(mappedHistoryRecords);
  //   return mappedHistoryRecords;
  // };