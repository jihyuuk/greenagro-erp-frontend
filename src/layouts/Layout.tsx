import * as React from "react";
import { Box, Toolbar } from "@mui/material";
import AppHeader from "./AppHeader";
import ResponsiveDrawer from "./ResponsiveDrawer";


interface Props {
    children: React.ReactNode;
}

// 사이드바 넓이
const drawerWidth = 240;

export default function Layout(props: Props) {

    const { children } = props;

    const [open, setOpen] = React.useState(false);

    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            
            {/* 반응형 사이드바 */}
            <ResponsiveDrawer open={open} drawerWidth={drawerWidth} openDrawer={openDrawer} closeDrawer={closeDrawer} />

            {/* 콘텐츠 영역 */}
            <Box sx={{ flex: 1 }}>
                {/* 헤더 */}
                <AppHeader drawerWidth={drawerWidth} openDrawer={openDrawer} />

                {/* 메인 영역 */}
                <Box component="main" sx={{ flex: 1, overflow: "auto", p: 1}}>
                    <Toolbar /> {/* AppBar 만큼 위에 여백 */}
                    {children} {/* 본문 */}
                </Box>
            </Box>
        </Box>
    );
}
