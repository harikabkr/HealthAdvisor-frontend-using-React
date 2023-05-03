import { Button } from "@mui/material"
import { INIT_BOOKING_MESSAGE } from "../../../utils/contants";

export const Booking = ({handleFeature}) => {
    const handleOnClick = () => {
        const otherOptionMessage = {
            sender:'ai',
            feature: 'booking',
            message: INIT_BOOKING_MESSAGE,
        }
        handleFeature(otherOptionMessage);
    }
    return (
        <Button id='option-booking' variant="outlined" color="warning" onClick={() => handleOnClick()}>Book a Doctor's Appointment</Button>
    )
}