import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = () => {
    //토큰 존재 여부 확인
    const token = localStorage.getItem("token");

    return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;