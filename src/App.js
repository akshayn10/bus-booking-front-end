import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Auth from "./pages/auth/Auth";
import Bus from "./pages/bus/Bus";
import BusSchedule from "./pages/busSchedule/BusSchedule";
import {BrowserRouter as Router,Route,Routes, Navigate,useLocation} from "react-router-dom";
import Booking from "./pages/booking/booking";
import CustomerSearch from "./pages/customerSearch/customerSearch";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#723ab7",
      light: "#2e2e2e",
    },
    secondary: {
      main: "#522e87",
      light: "#1a1a1a",
    },
    tertiary: {
      main: "#ffffff",
      light: "#595858",
    },
  },
});

function App() {
  return (
    //     <header className="App-header"></header>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/busSchedule" element={<BusSchedule />} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/search" element={<CustomerSearch/>}/>

        </Routes>
      </Router>

     
    </ThemeProvider>
  );
}

export default App;
