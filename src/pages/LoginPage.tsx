import { Box, TextField, Button, Typography, Paper, CircularProgress, Alert } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import logo from "../assets/로고.png";
import { useLoginForm } from "../hooks/useLoginForm";


export default function LoginPage() {

    const {
        username, 
        password,
        usernameError, passwordError,
        isLoading, showAlert,
        handleChange, handleLogin
    } = useLoginForm(); 



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

            {/* 배경 장식 1*/}
            <Box
                sx={{
                    position: 'absolute',
                    top: '-160px',
                    right: '-160px',
                    width: 320,
                    height: 320,
                    backgroundColor: 'primary.main',
                    opacity: 0.1,
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                }}
            />
            {/* 배경 장식 2*/}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '-160px',
                    left: '-160px',
                    width: 320,
                    height: 320,
                    backgroundColor: 'secondary.main',
                    opacity: 0.1,
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                }}
            />


            {/* 로그인 페이지 컨테이너 */}
            <Paper
                elevation={6}
                sx={{
                    p: 4,
                    width: '100%',
                    maxWidth: 480,
                    position: 'relative',
                    zIndex: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 3,
                    boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
                }}
            >

                {/* 로고 및 회사 브랜딩 */}
                <Box sx={{ textAlign: 'center', mb: 4 }}>


                    <img
                        src={logo}
                        alt="그린아그로 로고"
                        width={250}
                    />

                    <Typography variant="subtitle1" color="text.secondary">
                        전산 관리 시스템
                    </Typography>
                </Box>


                {/* 구분선 */}
                <Box sx={{ borderBottom: '1px solid #e5e7eb', mb: 3 }} />


                {/* 로그인 폼 */}
                <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

                    {/* 직원명 입력 필드 */}
                    <TextField
                        name="username"
                        value={username}
                        variant="outlined"
                        fullWidth
                        placeholder="직원명을 입력해주세요."
                        onChange={handleChange}
                        error={usernameError}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlinedIcon color="action" />
                                </InputAdornment>
                            ),
                        }}
                    />



                    {/* 비밀번호 입력 필드 */}
                    <TextField
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        value={password}
                        fullWidth
                        onChange={handleChange}
                        error={passwordError}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon color="action" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* 경고 */}
                    {showAlert && 
                         <Alert severity="error">
                            {showAlert}
                        </Alert>
                    }
               

                    {/* 로그인 버튼 */}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            background: 'linear-gradient(to right, #22c55e, #16a34a)',
                        }}
                        disabled={isLoading}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {isLoading ? <CircularProgress size={20} color="inherit" /> : <LoginOutlinedIcon />}

                            <Typography>{isLoading ? '로그인 중...' : '로그인'}</Typography>
                        </Box>
                    </Button>
                </Box>


                {/* 저작권 표시 */}
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography variant="body2" color="text.secondary">
                        © 2024 Acme Corporation. All rights reserved.
                    </Typography>
                </Box>

            </Paper>

        </Box>
    );
}
