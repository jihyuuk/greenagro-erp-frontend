import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb", // 파란색
    },
    secondary: {
      main: "#4f46e5", // 보라색
    },
  },
  typography: {
    fontFamily: 'SeoulNotice, "Inter", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 48,
          borderRadius: 12,
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          textTransform: "none",
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            backgroundColor: "rgba(249, 250, 251, 0.5)",
            height: 48,
            "& fieldset": {
              borderColor: "rgb(229, 231, 235)",
            },
            "&:hover fieldset": {
              borderColor: "rgb(59, 130, 246)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgb(59, 130, 246)",
              borderWidth: "2px",
            },
          },
        },
      },
    },
  },
});

export default theme;
