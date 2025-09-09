import { Box, Badge, TextField, InputAdornment, IconButton } from "@mui/material";
import logo from "../assets/로고2.png";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function AppHeader() {

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 3, py: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2}}>
                <Box width={176}>
                    <img src={logo} width={130} />
                </Box>

                <Breadcrumbs aria-label="breadcrumb">
                    {/* <Link underline="hover" color="inherit" href="/">
                        견적서 목록
                    </Link> */}
                    <Typography variant="h6" sx={{ color: 'text.primary' }}>견적서 생성</Typography>
                </Breadcrumbs>

            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

                <TextField
                    variant="outlined"
                    placeholder="통합검색"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />


                <Badge color="secondary" badgeContent={1} max={999}>
                    <NotificationsNoneIcon />
                </Badge>

                <SettingsOutlinedIcon />

                <AccountCircleOutlinedIcon />
            </Box>
        </Box>
    );

}