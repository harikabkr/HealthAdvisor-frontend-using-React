import { Stack } from "@mui/material";
import { OtherOption } from "./OtherOption";
import { SymptomCheck } from "./SymptomCheck/SymptomCheck";
import { Prescription } from "./Prescription/Prescription";
import { Booking } from "./Booking/Booking";

export const MostUsedFeatures = ({handleFeature}) => {
    return (
        <Stack spacing={1} direction="row">
            <SymptomCheck handleFeature={handleFeature}/>
            <Prescription handleFeature={handleFeature}/>
            <Booking handleFeature={handleFeature}/>
            <OtherOption handleFeature={handleFeature}/>
        </Stack>
    );
}