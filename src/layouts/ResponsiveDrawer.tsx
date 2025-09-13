import { Box, Drawer, Toolbar, Divider, SwipeableDrawer, List } from "@mui/material";
import logo from "../assets/drawer_logo.png";
import { navList } from '../config/NavList';
import SidebarMenuItem from '../components/NavListItem';


// 아이폰 최적화
const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

interface ResponsiveDrawerProps {
    drawerWidth: number;        //사이드바 넓이
    openDrawer: () => void;     //사이드바 열기
    closeDrawer: () => void;     //사이드바 닫기
    open: boolean;              //열림 여부
}


//사이드바 내용 (공통)
function DrawerContent({ onClose }: { onClose: () => void }) {
    return (
        <>
            <Toolbar sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                <img src={logo} width={130} />
            </Toolbar>

            <Divider />

            <List>
                {navList.map((item) => (
                        <SidebarMenuItem key={item.path} item={item} />
                ))}
            </List>
        </>
    );
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
                <DrawerContent onClose={closeDrawer} />
            </SwipeableDrawer>


            {/* 고정된 PC용 사이드바 */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                    }
                }}
            >
                <DrawerContent onClose={closeDrawer} />
            </Drawer>

        </Box>
    );
}