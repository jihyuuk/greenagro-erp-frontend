import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/loginApi";
import { LoginFailedError } from "../errors/customErrors";

export const useLoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState("");

    const navigate = useNavigate();


    //공용 onChange 함수
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;

        if (name === "username") {
            setUsername(value.trim());
        } else if (name === "password") {
            setPassword(value.trim());
        }

    };


    //로그인 함수
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        //로딩, 에러메세지 초기화
        setIsLoading(true);
        setShowAlert("");

        // 유효성 검사
        const usernameTrim = username.trim();
        const passwordTrim = password.trim();

        setUsernameError(!usernameTrim);
        setPasswordError(!passwordTrim);

        if (!usernameTrim || !passwordTrim) {
            setIsLoading(false);
            return;
        }


        // API 호출 로직
        try {
            //api 호출
            const response = await login(usernameTrim, passwordTrim);

            //엑세스 토큰 저장
            localStorage.setItem("token", response.accessToken);

            //리다이렉트
            navigate("/", { replace: true });

        } catch (error) {

            if (error instanceof LoginFailedError) {
                    setShowAlert("아이디 또는 비밀번호가 일치하지 않습니다.");
                    setUsernameError(true);
                    setPasswordError(true);
            }else{
                setShowAlert("일시적인 오류가 발생했습니다.");
            }

        } finally {
            setIsLoading(false);
        }

    };


    return {
        username,
        password,
        usernameError,
        passwordError,
        isLoading,
        showAlert,
        handleChange,
        handleLogin,
    };
};