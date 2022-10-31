import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Auth from "./pages/auth/Auth";
import Bus from "./pages/bus/Bus";
import BusSchedule from "./pages/busSchedule/BusSchedule";
import {BrowserRouter as Router,Route,Routes, useNavigate,useLocation} from "react-router-dom";
import Booking from "./pages/booking/booking";
import CustomerSearch from "./pages/customerSearch/customerSearch";
import { useState, useEffect } from "react";

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
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("profile"));
  });
  return (
    //     <header className="App-header"></header>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Auth setUser={setUser} user={user}/>} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/busSchedule" element={<BusSchedule />} />
          <Route path="/booking" element={<Booking user={user}/>} />
          <Route path="/search" element={<CustomerSearch/>}/>

        </Routes>
      </Router>

     
    </ThemeProvider>
  );
}

export default App;
