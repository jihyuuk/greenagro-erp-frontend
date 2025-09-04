import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme'
import LoginPage from './pages/LoginPage'
import CssBaseline from "@mui/material/CssBaseline";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App
