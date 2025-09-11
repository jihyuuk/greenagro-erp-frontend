import * as React from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, Badge, Divider, SwipeableDrawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Sidebar from "./Sidebar";
import logo from "../assets/drawer_logo.png";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


interface Props {
    children: React.ReactNode;
}

// 사이드바 넓이
const drawerWidth = 240;
// 사이드바 아이폰 최적화
const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function Layout(props: Props) {

    const { children } = props;

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            {/* 모바일 사이드바 */}
            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                sx={{ display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": { width: drawerWidth } }}
                disableBackdropTransition={!iOS} disableDiscovery={iOS} // 사이드바 아이폰 최적화
            >
                <Toolbar sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                    <img src={logo} width={130} />
                </Toolbar>

                <Divider />

                <Sidebar />
            </SwipeableDrawer>


            {/*고정 사이드바 */}
            <Box sx={{ width: drawerWidth, overflowY: "auto", borderRight: 1, borderColor: 'divider', display: { xs: 'none', sm: 'block' } }}>
                <Toolbar sx={{ display: "flex", justifyContent: "center", alignContent: "center", px: 1}} disableGutters>
                    <img src={logo} width={120} />
                </Toolbar>

                <Divider />

                <Sidebar />
            </Box>

            {/* 콘텐츠 영역 */}
            <Box sx={{ flex: 1 }}>

                {/* 헤더 */}
                <AppBar
                    sx={{
                        // sm 이상일때 사이드바 공간만큼 왼쪽 띄움
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>

                        {/* 햄버거 버튼 */}
                        <IconButton
                            color="inherit"
                            size="large"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2, display: { sm: 'none' } }}
                            onClick={() => setOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* 타이틀 */}
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                            Responsive drawer
                        </Typography>

                        {/* 알림 버튼 */}
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge color="error" badgeContent={3} max={999}>
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                    </Toolbar>
                </AppBar>

                {/* 메인 영역 */}
                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        overflow: "auto",
                        p: 1
                    }}
                >
                    {/* AppBar 만큼 위에 여백 */}
                    <Toolbar />

                    {children}
                </Box>
            </Box>
        </Box>
    );
}
