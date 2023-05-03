import {
  Paper,
  Box,
  Container,
  Typography,
  Divider,
  Grid,
  List,
  FormControl,
  TextField,
  IconButton,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import "./Chat.css";
import { Message } from "./message/Message";
import { ChatLoader } from "../Layout/ChatLoader";
import { WELCOME_MESSAGE } from "../../utils/contants";
import { useChatState } from "./hooks/useChatState";
import { useChatActions } from "./hooks/useChatActions";

export const Chat = () => {
  const {
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
    setChatHistory,
  } = useChatState();

  const {
    handlePredefinedFeatures,
    handleMessageChange,
    sendMessage,
  } = useChatActions({user,
    selectedFeature,
    isNewChat,
    conversationId,
    setLoading,
    currentMessage,
    setCurrentMessage,
    chatMessageList,
    setChatMessageList,
    setChatHistory,
  });

  useEffect(() => {
    const welcomeMessage = {
      id: 0,
      sender: "ai",
      message: WELCOME_MESSAGE,
    };
    if (isNewChat) {
      setChatMessageList([welcomeMessage]);
    }
  }, [isNewChat]);

  useEffect(() => {
    // scroll to the bottom of the messages container when messages change
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatMessageList]);

  const listChatMessages = chatMessageList.map((chatMessage) => {
    return (
      <Message
        messageObj={chatMessage}
        handleFeature={handlePredefinedFeatures}
      />
    );
  });

  return (
    <>
      <Container>
        <Paper elevation={5}>
          <Box p={3} mt={5}>
            <Typography variant="h6">Conversation</Typography>
            <Divider />
            <Grid container spacing={2} alignItems="center">
              <Grid id="chat-container" xs={12} item>
                <List id="chat-container-messages">
                  {listChatMessages}
                  <div ref={messagesEndRef} />
                  {loading ? <ChatLoader /> : null}
                </List>
              </Grid>
              <Grid xs={11} item>
                <FormControl fullWidth>
                  <TextField
                    onChange={handleMessageChange}
                    value={currentMessage}
                    label="Ask your Question..."
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
              <Grid xs={1} item>
                {loading ? (
                  <LoadingButton loading disabled></LoadingButton>
                ) : (
                  <IconButton
                    disabled={loading}
                    aria-label="send"
                    color="primary"
                    onClick={sendMessage}
                  >
                    <SendIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
