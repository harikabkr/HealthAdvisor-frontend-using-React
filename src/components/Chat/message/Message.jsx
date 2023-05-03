import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import SmartToyTwoToneIcon from "@mui/icons-material/SmartToyTwoTone";
import { AI_MESSAGE, USER_MESSAGE } from "../../../utils/contants";
import { MostUsedFeatures } from "../../Features/MostUsedFeatures";
import { convertBreak } from "../../../utils/renderUtils";

const Content = (text, side, ) => {
  return (
    <>
      <Box>
        <Paper elevation={2} sx={{bgcolor: side==='left' ? AI_MESSAGE : USER_MESSAGE}}>
          <Typography component="div" align={side} p={1} width={'auto'}>
            {text}
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export const Message = ({ messageObj, handleFeature }) => {
  const { id, sender, message } = messageObj;

  return sender.toLowerCase() === "ai" ? (
    <>
        <ListItem key={id}>
        <ListItemAvatar>
            <Avatar sx={{bgcolor: AI_MESSAGE}}>
            <SmartToyTwoToneIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText>
          {Content(message, "left")}
        </ListItemText>
        </ListItem>
        {
            id === 0 ? (
                <ListItem key={id}>
                    <MostUsedFeatures handleFeature={handleFeature}/>
                </ListItem>
            ) : null
        }
    </>
  ) : (
    <ListItem key={id}>
      <ListItemText primary={Content(message, "right")} />
    </ListItem>
  );
};
