import { Button } from "@mui/material"
import { INIT_SYMPTOM_CHECK_MESSAGE } from "../../../utils/contants";

export const SymptomCheck = ({handleFeature}) => {
    const handleOnClick = () => {
        const message = {
            sender:'ai',
            feature: 'symptom_check',
            message: INIT_SYMPTOM_CHECK_MESSAGE,
        }
        handleFeature(message);
    }
    return (
        <Button id='option-symptom' variant="outlined" color="warning" onClick={() => handleOnClick()}>Check your Symptoms</Button>
    )
}