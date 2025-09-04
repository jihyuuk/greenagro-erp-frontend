import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper, FormControlLabel, Switch, CircularProgress, Alert } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import logo from "../assets/로고.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlet] = useState("");

    const navigate = useNavigate();


    // 로그인 
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        //1. 로딩처리
        setIsLoading(true);

        //2. tirm
        const usernameTrim = username.trim();
        const passwordTrim = password.trim();

        //3. 빈칸 검증
        setUsernameError(false);
        setPasswordError(false);

        if (!usernameTrim || !passwordTrim) {

            if (!usernameTrim) {
                setUsernameError(true);
            }

            if (!passwordTrim) {
                setPasswordError(true);
            }

            setIsLoading(false);
            return;
        }


        //4. API 호출
        axios.post("http://172.30.1.44:8080/auth/login", {username, password}, {withCredentials: true})
        .then((response) => {
            //로그인 성공

            //엑세스 토큰 파싱
            const token = response.data.accessToken;
            if(!token) throw new Error("토큰 파싱 실패");

            //로컬스토리지에 저장
            localStorage.setItem("token", token);

            //리다이렉트 홈으로
            navigate("/", {replace: true});
        })
        .catch((error) => {

            if(error.response?.status === 401){
                //로그인 실패
                setShowAlet("아이디 또는 비밀번호가 일치하지 않습니다.");
                setUsernameError(true);
                setPasswordError(true);
            }else{
                //그 외 오류
                setShowAlet("일시적인 오류가 발생했습니다.")
            }
 
        })
        .finally(() => {
            setIsLoading(false);
        })


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
                <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

                    {/* 직원명 입력 필드 */}
                    <TextField
                        variant="outlined"
                        fullWidth
                        value={username}
                        placeholder="직원명을 입력해주세요."
                        onChange={(e) => setUsername(e.target.value.trim())}
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
                        fullWidth
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        value={password}
                        onChange={(e) => setPassword(e.target.value.trim())}
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
