import { Box, List } from "@mui/material";
import { RequestQuoteOutlined, BusinessOutlined, PersonOutlined } from "@mui/icons-material";
import SidebarMenuItem from "../components/SidebarMenuItem";


export default function Sidebar() {

    const menuItems = [
        { path: '/quotes', label: '견적서', icon: <RequestQuoteOutlined /> },
        { path: '/partners', label: '거래처', icon: <BusinessOutlined /> },
        { path: '/employees', label: '직원관리', icon: <PersonOutlined /> },
        { path: '/employees', label: '직원관리2', icon: <PersonOutlined />, children : [
            {path: '/quotes', label: '견적서', icon: <RequestQuoteOutlined /> },
            {path: '/quotes', label: '견적서', icon: <RequestQuoteOutlined /> },
            {path: '/quotes', label: '견적서', icon: <RequestQuoteOutlined /> }
        ]},
    ]


    return (
        <Box>

            {/* 경로 사이드바 */}
            <List component="nav">
                
                {menuItems.map((item) => (
                    <SidebarMenuItem key={item.path} item={item} />
                ))}

            </List>

        </Box>
    );

}