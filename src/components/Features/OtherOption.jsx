import { Button } from "@mui/material"
import { INIT_OTHER_OPTIONS_MESSAGE } from "../../utils/contants";

export const OtherOption = ({handleFeature}) => {
    const handleOnClick = () => {
        const otherOptionMessage = {
            sender:'ai',
            feature: 'other',
            message: INIT_OTHER_OPTIONS_MESSAGE,
        }
        handleFeature(otherOptionMessage);
    }
    return (
        <Button id='option-other' variant="outlined" color="warning" onClick={() => handleOnClick()}>Other..</Button>
    )
}