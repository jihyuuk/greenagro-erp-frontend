import * as React from 'react';
import { Box, Drawer, Toolbar, Divider, SwipeableDrawer } from "@mui/material";
import Sidebar from "./Sidebar";
import logo from "../assets/drawer_logo.png";

// 아이폰 최적화
const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

interface ResponsiveDrawerProps {
    drawerWidth: number;        //사이드바 넓이
    openDrawer: () => void;     //사이드바 열기
    closeDrawer: () => void;     //사이드바 닫기
    open: boolean;              //열림 여부
}


export default function ResponsiveDrawer({ drawerWidth, open, openDrawer, closeDrawer }: ResponsiveDrawerProps) {
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            {/* 모바일용 사이드바 */}
            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={closeDrawer}
                onOpen={openDrawer}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    "& .MuiDrawer-paper": { width: drawerWidth }
                }}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                    <img src={logo} width={130} />
                </Toolbar>

                <Divider />

                <Sidebar />

            </SwipeableDrawer>

            {/* 고정된 PC용 사이드바 */}
            <Box
                sx={{
                    width: drawerWidth,
                    overflowY: "auto",
                    borderRight: 1,
                    borderColor: 'divider',
                    display: { xs: 'none', sm: 'block' }
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "center", alignContent: "center", px: 1 }} disableGutters>
                    <img src={logo} width={120} />
                </Toolbar>

                <Divider />

                <Sidebar />
            </Box>
        </Box>
    );
}