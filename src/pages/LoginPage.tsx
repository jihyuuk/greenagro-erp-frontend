import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, FormControlLabel, Switch, CircularProgress } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import logo from "../assets/로고.png";


export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            if (username && password) {
                const userData = {
                    name: username,
                    email: `${username.replace(/\s/g, "").toLowerCase()}@acme.co`,
                    role: username.includes("관리") || username.includes("Admin") ? "admin" : "user",
                };
            } else {
            }
            setIsLoading(false);
        }, 1000);
    };


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
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

                    {/* 직원명 입력 필드 */}
                    <TextField
                        label="직원명"
                        variant="outlined"
                        fullWidth
                        value={username}
                        placeholder="직원명을 입력해주세요."
                        onChange={(e) => setUsername(e.target.value)}
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
                        label="비밀번호"
                        fullWidth
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon color="action" />
                                </InputAdornment>
                            ),
                        }}
                    />


                    {/* 자동 로그인 토글 버튼 */}
                    <FormControlLabel
                        control={<Switch checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                        label={<Typography variant="body2" color="text.secondary">자동 로그인</Typography>}
                        sx={{ m: 0 }}
                    />


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
