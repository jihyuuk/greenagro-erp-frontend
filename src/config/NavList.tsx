import { RequestQuoteOutlined, BusinessOutlined, PersonOutlined } from "@mui/icons-material";

// SidebarMenuItem의 아이템 타입을 정의합니다.
export interface NavItem {
    path: string;
    label: string;
    icon: React.ReactElement;
    children?: NavItem[];
}

// 페이지 타이틀 매핑을 위한 타입
export interface PageTitle {
    path: string;
    title: string;
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

// 페이지 타이틀 매핑
export const pageTitles: PageTitle[] = [
    { path: '/', title: '메인' },
    { path: '/quotes', title: '견적서' },
    { path: '/partners', title: '거래처' },
    { path: '/employees', title: '직원관리' },
];


// 경로에 따른 타이틀을 반환하는 함수
export const getPageTitle = (pathname: string): string => {
    const pageTitle = pageTitles.find(page => page.path === pathname);
    return pageTitle ? pageTitle.title : 'GreenAgro ERP';
};