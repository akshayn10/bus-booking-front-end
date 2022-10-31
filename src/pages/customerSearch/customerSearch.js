import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import useStyles from "./styles";
import busSchedule from "../../services/busSchedule";
import {
  Container,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Typography,
  Button
} from "@mui/material";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CustomerSearch = () => {
    const  districts = [
        { name: "Colombo" },
        { name: "Gampaha" },
        { name: "Kalutara" },
        { name: "Kandy" },
        { name: "Matale" },
        { name: "Nuwara Eliya" },
        { name: "Galle" },
        { name: "Matara" },
        { name: "Hambantota" },
        { name: "Jaffna" },
        { name: "Mannar" },
        { name: "Vavuniya" },
        { name: "Mullaitivu" },
        { name: "Kilinochchi" },
        { name: "Batticaloa" },
        { name: "Ampara" },
        { name: "Trincomalee" },
        { name: "Kurunegala" },
        { name: "Puttalam" },
        { name: "Anuradhapura" },
        { name: "Polonnaruwa" },
        { name: "Badulla" },
        { name: "Monaragala" },
        { name: "Ratnapura" },
        { name: "Kegalle" }
      ]

  const classes = useStyles();

  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date());
  const [busSchedules, setBusSchedules] = useState([]);
  const searchBusSchedule = () => {
    console.log(startLocation);
    busSchedule.searchSchedule({startLocation, destination, date: date.toString()})
      .then((response) => {
        console.log(response.data);
        setBusSchedules(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  return (
<>
      <Container component="main" maxWidth="xs">
         <Paper className={classes.paper} elevation={3}>
        
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid
            container
            justifyContent="space-around"
            style={{
              color: "white",
            }}
          >
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              style={{ text: "yellow" }}
              format="MM/dd/yyyy"
              value={date}
              onChange={(date) => setDate(date)}
              KeyboardButtonProps={{
                "aria-label": "change end date",
              }}
            />
            </Grid>
        </MuiPickersUtilsProvider>
            <Grid item xs={12} sm={4}>
              <FormControl
                // sx={{ width: "100%" }}
                fullWidth
                required
              >
                <InputLabel id="from">From</InputLabel>
                <Select
                  labelId="from"
                  name="district"
                  value={startLocation}
                  label="Start Location"
                  onChange={(e) => setStartLocation(e.target.value)}
                >
                  {districts.map((district) => {
                    return (
                      <MenuItem key={district.name} value={district.name}>
                        {district.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                // sx={{ width: "100%" }}
                fullWidth
                required
              >
                <InputLabel id="destination">Destination</InputLabel>
                <Select
                  labelId="destination"
                  name="destination"
                  value={destination}
                  label="destination"
                  onChange={(e) => setDestination(e.target.value)}
                >
                  {districts.map((district) => {
                    return (
                      <MenuItem key={district.name} value={district.name}>
                        {district.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Button
              onClick={searchBusSchedule}
              className={classes.submit}
              style={{ marginBottom: "15px", marginTop: "12px" }}
              fullWidth
              variant="contained"
              color="primary"
              //   disabled={!form.email || !form.password}
            >
              Search
            </Button>
     </Paper>
  </Container>  

<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          {busSchedules.map((busSchedule) => (
            <Grid item xs={8} sm={4} md={3} key={busSchedule.id}>
              <Item>
                <Typography component="h2" variant="h6">
                  From: {busSchedule.startLocation}
                </Typography>
                <Typography component="h2" variant="h6">
                  To: {busSchedule.destination}
                </Typography>
                <Typography component="h2" variant="h6">
                  Departure Time: {busSchedule.departureTime}
                </Typography>
                <Typography component="h2" variant="h6">
                  Arrival Time: {busSchedule.arrivalTime}
                </Typography>
              </Item>
             
            </Grid>
          ))}
        </Grid>
      </Box>
      </>      
      
  );
};

export default CustomerSearch;
