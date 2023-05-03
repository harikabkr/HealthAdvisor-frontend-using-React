import {
  Box,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import { useState } from "react";
import { useChatHisoryState } from "./hooks/useChatHistoryState";
import { useChatHisoryActions } from "./hooks/useChatHistoryActions";

export const ChatHistory = () => {
  const { user, chatHistory, setChatHistory } = useChatHisoryState();
  const { fetchChatHistory } = useChatHisoryActions({ user, setChatHistory });
  const [openHistoryDrawer, setOpenHistoryDrawer] = useState(false);

  const toggleHistoryDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenHistoryDrawer(open);
    // make api call only when opening the drawer and state is empty && chatHistory.length < 1
    if (open) {
      fetchChatHistory();
    }
  };

  const historyList = chatHistory.map((historyRecord) => {
    return (
      <>
        <Paper elevation={3}>
          <Box p={2} m={2}>
            <b> Case {historyRecord.id} : {historyRecord.chatName} </b>
            <br/>
            <p><i>User</i>: {historyRecord.chathistories[0].userMessage}</p>
          </Box>
        </Paper>
      </>
    );
  });
  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        onClick={toggleHistoryDrawer(true)}
      >
        <HistoryToggleOffIcon />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={openHistoryDrawer}
        onClose={toggleHistoryDrawer(false)}
      >
        <Container>
          <Box mt={2}>
            <Typography variant="h6">Previous Conversations</Typography>
            <Divider />
            <List id="chat-history-records">{historyList}</List>
            {/* <Grid container>
                            <Grid id="history-container" xs={12} item>
                                <List id="conversations-history">
                                    <ListItem>
                                        <ListItemText 
                                            primary='Head Ache' 
                                            secondary={
                                                    <>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        I have Symptoms like, 
                                                    </Typography>
                                                    {" — Eye Pain, pain on the back…"}
                                                    </>
                                                    }/>
                                    </ListItem>
                                     <Divider component="li" />
                                    <ListItem>
                                        <ListItemText 
                                            primary='Insomnia'
                                            secondary={
                                                <>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    I need prescription for, 
                                                </Typography>
                                                {" — having sleepless nights, not getting enough sleep…"}
                                                </>
                                                }
                                            />
                                    </ListItem>
                                     <Divider component="li" />
                                    <ListItem>
                                        <ListItemText 
                                            primary='Migrane'
                                            secondary={
                                                <>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    I need appointment for Migrane, 
                                                </Typography>
                                                {" — Eye Pain, pain on the back…"}
                                                </>
                                            }
                                        />
                                    </ListItem>
                                     <Divider component="li" />
                                </List>
                            </Grid>
                        </Grid>  */}
          </Box>
        </Container>
      </Drawer>
    </>
  );
};
