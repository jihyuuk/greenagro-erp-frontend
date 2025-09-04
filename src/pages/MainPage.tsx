import { Box, Typography } from "@mui/material";


export default function HomePage() {

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(to bottom right, #e0f2fe, #fff, #eef2ff)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Typography>홈 화면</Typography>

        </Box>
    );
}
