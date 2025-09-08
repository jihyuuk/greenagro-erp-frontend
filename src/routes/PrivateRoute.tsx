import { Navigate, Outlet } from "react-router-dom";
import Layout from "../layouts/Layout";


const PrivateRoute = () => {

    //토큰 존재 여부 확인
    const token = localStorage.getItem("token");

    // 로그인되지 않았다면 로그인 페이지로 리다이렉트
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // 로그인되었다면 Layout 컴포넌트 내부에 자식 라우트를 렌더링
    return (
        <Layout>
            <Outlet />
        </Layout>
    );

};

export default PrivateRoute;