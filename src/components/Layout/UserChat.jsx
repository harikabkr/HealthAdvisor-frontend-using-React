import { Box, Stack } from "@mui/material";
import { Chat } from "../Chat/Chat";
import { NewChatButton } from "../Chat/NewChatButton";

export const UserChat = () => {
    return (
        <Box mt={2}>
            <Stack direction="row">
               <NewChatButton/>
            </Stack>
            <Chat />
        </Box>
    );
}