import { AppBar, Toolbar, IconButton, Typography, Badge, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface AppHeaderProps {
    drawerWidth: number;        //사이드바 넓이
    openDrawer: () => void;     //햄버거 버튼 동작
}

export default function AppHeader({ drawerWidth, openDrawer }: AppHeaderProps) {

    return (
        <AppBar
            sx={{
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
                    onClick={openDrawer}
                >
                    <MenuIcon />
                </IconButton>

                {/* 타이틀 */}
                <Typography variant="h6" noWrap component="div">
                    Responsive drawer
                </Typography>


                <Box sx={{ flexGrow: 1 }} />

                {/* 알림 버튼 */}
                <IconButton
                    size="large"
                    aria-label="notifications"
                    color="inherit"
                    edge="end"
                >
                    <Badge color="error" badgeContent={3} max={999}>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}