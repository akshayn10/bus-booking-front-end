import React, { useState, useEffect } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import TextField from '@mui/material/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import {
  Button,
  Paper,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import useStyles from "./styles";
import BusScheduleService from "../../services/busSchedule";
import BusService from "../../services/bus";
const BusSchedule = () => {
  const districts = [
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
    { name: "Kegalle" },
  ];

  const [bus, setBus] = useState([]);
  const [busId, setBusId] = useState("");
  const [departureTime, setDepartureTime] = React.useState(new Date());
  const [arrivalTime, setArrivalTime] = React.useState(new Date());
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");

  const handleStartDateChange = (date) => {
    setDepartureTime(date);
  };
  const handleEndDateChange = (date) => {
    setArrivalTime(date);
  };
  const handleTicketPrice = (event) => {
    event.preventDefault();
    setTicketPrice(() => {
      return event.target.value;
    });
  };

  const getBus = async () => {
    try {
      const res = await BusService.getAllBuses();
      console.log(res.data);
      setBus(() => {
        return res.data;
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBus();
  }, []);

  const handleBusChange = (event) => {
    setBusId(event.target.value);
  };

  const handleStartLocation = (event) => {
    setStartLocation(event.target.value);
  };
  const handleDestination = (event) => {
    setDestination(event.target.value);
  };

  // const getBusSchedule = async () => {
  //   try{
  //     const res = await BusScheduleService.getBusSchedule();
  //     console.log(res.data);
  //     setBusSchedule(() => {
  //       return res.data;
  //     })
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }

  const addNewBusSchedule = async (e) => {
    e.preventDefault();

    try {
      const res = await BusScheduleService.addBusSchedule( {
        busId,
        startLocation,
        destination,
        departureTime:departureTime.toString(),
        arrivalTime:arrivalTime.toString(),
        ticketPrice,
      });
      setBusId(null);
      setStartLocation(null);
      setDestination(null);
      setDepartureTime(null);
      setArrivalTime(null);
      setTicketPrice("");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <>
          <Typography component="h1" variant="h5">
            Bus Schedule
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl
                  // sx={{ width: "100%" }}
                  fullWidth
                  required
                >
                  <InputLabel id="busNumber">Bus Number</InputLabel>
                  <Select
                    labelId="busNumber"
                    name="busId"
                    value={busId}
                    label="busNumber"
                    onChange={handleBusChange}
                  >
                    {bus.map((bus) => {
                      return (
                        <MenuItem key={bus.id} value={bus.id}>
                          {bus.busNumber}
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
                  <InputLabel id="from">From</InputLabel>
                  <Select
                    labelId="from"
                    name="district"
                    value={startLocation}
                    label="Start Location"
                    onChange={handleStartLocation}
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
                    onChange={handleDestination}
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
                    format="MM/dd/yyyy"
                    value={departureTime}
                    onChange={handleStartDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change start date",
                    }}
                  />
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={departureTime}
                    onChange={handleStartDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    style={{ text: "yellow" }}
                    format="MM/dd/yyyy"
                    value={arrivalTime}
                    onChange={handleEndDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change end date",
                    }}
                  />
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={arrivalTime}
                    onChange={handleEndDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Ticket Price"
                variant="outlined"
                value={ticketPrice}
                onChange={handleTicketPrice}
              />
            </Grid>

            <Button
              onClick={addNewBusSchedule}
              className={classes.submit}
              style={{ marginBottom: "15px", marginTop: "12px" }}
              fullWidth
              variant="contained"
              color="primary"
              //   disabled={!form.email || !form.password}
            >
              ADD
            </Button>
          </form>
        </>
      </Paper>
    </Container>
  );
};

export default BusSchedule;
