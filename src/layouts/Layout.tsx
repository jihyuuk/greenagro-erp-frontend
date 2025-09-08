import { Box } from "@mui/material";
import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";


//토큰 존재 여부 확인
type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box sx={{
            display: "flex",
            height: "100vh",
            flexDirection: "column"
        }}>

            {/* 헤더 */}
            <Box component="header" sx={{
                height: "60px",
                borderBottom: 1, 
                borderColor: 'divider', 
                p: 2 
            }}>
                <AppHeader />
            </Box>


            <Box sx={{ display: "flex", flex: 1 }}>
                {/* 사이드바 */}
                <Box component="aside" sx={{
                    width: "200px",
                    borderRight: 1, 
                    borderColor: 'divider', 
                }}>
                    <Sidebar />
                </Box>

                {/* 메인 콘텐츠 */}
                <Box component="main" sx={{
                    flex: 1,
                    p: 2,
                    bgcolor: "grey.50", 
                }}>
                    {children}
                </Box>
            </Box>

        </Box>
    );
};

export default Layout;