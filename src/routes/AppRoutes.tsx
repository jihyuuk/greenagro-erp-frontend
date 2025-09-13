import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import QuotesPage from "../pages/QuotesPage";
import PartnersPage from "../pages/PartnersPage";
import EmployeesPage from "../pages/EmployeesPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
                <Routes>
                    {/* 로그인 필수 */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/quotes" element={<QuotesPage />} />
                        <Route path="/partners" element={<PartnersPage />} />
                        <Route path="/employees" element={<EmployeesPage />} />
                    </Route>

                    {/* 로그인 페이지 */}
                    <Route path="/login" element={<LoginPage />} />

                    {/* 없는 주소 → 리다이렉트 */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
        </BrowserRouter>
    );
}