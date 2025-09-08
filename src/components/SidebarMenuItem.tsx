// src/components/SidebarMenuItem.tsx
import type { ReactNode } from 'react';
import { useState } from 'react';
import { ListItemButton, ListItemIcon, ListItemText, Collapse, List } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface MenuItem {
    path: string;
    label: string;
    icon: ReactNode;
    children?: MenuItem[];
}

interface SidebarMenuItemProps {
    item: MenuItem;
}


const SidebarMenuItem = ({ item }: SidebarMenuItemProps) => {

    const isActive = useLocation().pathname === item.path; //현재 경로로 Active 판볉
    const isParent = !!item.children; // 자식 메뉴가 있는지 확인
    const [open, setOpen] = useState(false);


    const handleToggle = () => {
        setOpen(!open);
    };

    // 자식 메뉴가 없는 일반 메뉴 항목 렌더링
    const renderNormalItem = () => (
        <ListItemButton
            component={Link}
            to={item.path}
            sx={{
                pl: 2, 
                bgcolor: isActive ? 'grey.200' : 'inherit',
                color: isActive ? 'black' : 'text.secondary',
                '&:hover': {
                    bgcolor: isActive ? 'grey.200' : 'action.hover',
                },
            }}
        >
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.label} />
        </ListItemButton>
    );


    // 자식 메뉴가 있는 드롭다운 메뉴 렌더링
    const renderDropdownItem = () => (
        <>
            <ListItemButton
                onClick={handleToggle}
                sx={{
                    pl: 2,
                    color: 'text.secondary',
                    '&:hover': {
                        bgcolor: 'action.hover',
                    },
                }}
            >
                <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                    {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.label} />

                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>


            <Collapse in={open} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>
                    {item.children?.map(child => (
                        <SidebarMenuItem key={child.path} item={child} />
                    ))}
                </List>
                
            </Collapse>
        </>
    );

    return isParent ? renderDropdownItem() : renderNormalItem();
};

export default SidebarMenuItem;