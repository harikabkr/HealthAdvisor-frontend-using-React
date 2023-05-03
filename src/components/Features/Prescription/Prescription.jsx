import { Button } from "@mui/material"
import { INIT_PRESCRIPTION_MESSAGE } from "../../../utils/contants";

export const Prescription = ({handleFeature}) => {
    const handleOnClick = () => {
        const otherOptionMessage = {
            sender:'ai',
            feature: 'getPrescription',
            message: INIT_PRESCRIPTION_MESSAGE,
        }
        handleFeature(otherOptionMessage);
    }
    return (
        <Button id='option-prescription' variant="outlined" color="warning" onClick={() => handleOnClick()}>Get Prescription</Button>
    )
}