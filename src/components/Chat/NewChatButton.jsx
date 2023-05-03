import { Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch } from "react-redux";
import { setNewChat } from "../../reducers/chatReducer";

export const NewChatButton = () => {
    const dispatch = useDispatch();
    const startNewChat = () => {
        dispatch(setNewChat(true));
    }
    return (
        <Button variant="outlined" endIcon={<AddCircleIcon />} sx={{marginLeft: '1.5rem'}} onClick={startNewChat}> New Chat </Button>
    );
}