import { Skeleton, Stack } from "@mui/material"

export const ChatLoader = () => {
    return (
        <Stack spacing={2} direction="row" mb={1}>
            <Skeleton variant="circular" width={15} height={15} />
            <Skeleton variant="circular" width={15} height={15} />
            <Skeleton variant="circular" width={15} height={15} />
        </Stack>
    )
}