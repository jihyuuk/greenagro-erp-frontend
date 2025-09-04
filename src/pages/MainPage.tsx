import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function HomePage() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login", {replace: true});
    }

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
            <Box>
                <Typography>홈 화면</Typography>
            </Box>
            <Button onClick={()=>handleLogout()}>로그아웃</Button>

        </Box>
    );
}
