import { RequestQuoteOutlined, BusinessOutlined, PersonOutlined } from "@mui/icons-material";

// SidebarMenuItem의 아이템 타입을 정의합니다.
export interface NavItem {
    path: string;
    label: string;
    icon: React.ReactElement;
    children?: NavItem[];
}

export const navList: NavItem[] = [
    { path: '/quotes', label: '견적서', icon: <RequestQuoteOutlined /> },
    { path: '/partners', label: '거래처', icon: <BusinessOutlined /> },
    { path: '/employees', label: '직원관리', icon: <PersonOutlined /> },
    {
        path: '/employees-management',
        label: '직원관리2',
        icon: <PersonOutlined />,
        children: [
            { path: '/employees/sub1', label: '하위메뉴1', icon: <RequestQuoteOutlined /> },
            { path: '/employees/sub2', label: '하위메뉴2', icon: <RequestQuoteOutlined /> },
            { path: '/employees/sub3', label: '하위메뉴3', icon: <RequestQuoteOutlined /> }
        ]
    },
];