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
<<<<<<< HEAD
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
=======
const BusSchedule = ({ role, setUser, user }) => {
>>>>>>> 89efdfa75343c12d2f1874e597e9d6e539fb3165

  const [bus, setBus] = useState([]);
  const [busId, setBusId] = useState("");
  const [departureTime, setDepartureTime] = React.useState(new Date());
  const [arrivalTime, setArrivalTime] = React.useState(new Date());
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");

  const handleStartDateChange = (date) => {
    setDepartureTime(date.toString());
    console.log(date);
  };
  const handleEndDateChange = (date) => {
    setArrivalTime(date.toString());
    console.log(date);
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
<<<<<<< HEAD
    setBusId(event.target.value);
=======
    // const name = event.target.name;
    // const value = event.target.value;
    
    // if(name=="busId"){
    //   const busNumber = bus.
    //   setBusScheduleData((values) => ({ ...values, [name]: value }));
    // }
    // setBusScheduleData((values) => ({ ...values, [name]: value }));
    // console.log(busScheduleData);
    // console.log(event);
    setBusNumber(event.target.value)
>>>>>>> 89efdfa75343c12d2f1874e597e9d6e539fb3165
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
        departureTime,
        arrivalTime,
        ticketPrice,
      });
      console.log(res.data);
      window.location.reload(false);
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
<<<<<<< HEAD
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
=======
            <Grid item xs={12} sm={6}>
                        <FormControl
                          // sx={{ width: "100%" }}
                          fullWidth
                          required
                        >
                          <InputLabel id="busNumber">
                            Bus Number
                          </InputLabel>
                          <Select
                            labelId="busNumber"
                            name="busId"
                            value={busNumber}
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
              <Input name="startLocation" value={scheduleData.startLocation || ""} label="From" handleChange={handleChange}/>
              <Input name="destination" value={scheduleData.destination || ""}  label="To" />
              <DateTime name="departureTime" value={scheduleData.departureTime || ""}  label="Departure Time" />
              {/* <DateTime name="arrivalTime" value={scheduleData.arrivalTime || ""}  label="Arrival Time" /> */}
              <Input name="ticketPrice" value={scheduleData.ticketPrice || ""}  label="Ticket Price" />
              
           
>>>>>>> 89efdfa75343c12d2f1874e597e9d6e539fb3165
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
