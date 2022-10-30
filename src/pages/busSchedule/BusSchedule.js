import React, { useState, useEffect } from "react";
import {Avatar, Button, Paper, Grid, Typography, Container, FormControl,  InputLabel, Select,MenuItem }from "@mui/material";
import useStyles from "./styles";
import Input from "../../components/formComponents/Input";
import DateTime from "../../components/formComponents/DateTime";
import BusScheduleService from "../../services/busSchedule";
import FormHelperText from "@mui/material/FormHelperText";
import BusService from "../../services/bus";
const BusSchedule = ({ role, setUser, user }) => {

  // const [busSchedule, setBusSchedule] = useState([]);
  const [busScheduleData, setBusScheduleData] = useState({});
  const [bus, setBus] = useState([]);
  const [busNumber, setBusNumber] = useState("");
  const[scheduleData,setScheduleData]=useState({});

  const getBus = async () => {

    try {
      const res = await BusService.getAllBuses();
      console.log(res.data);
      setBus(() => {
        return res.data;
      })
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBus();
  }, []);

  const handleBusChange = (event) => {
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
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setScheduleData((values) => ({ ...values, [name]: value }));
    console.log(scheduleData);
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

  // useEffect(() => {
  //   getBusSchedule();
  // }, []);

  const addNewBusSchedule = async (e) => {
    e.preventDefault();
    console.log(busScheduleData);
    try{
      const res = await BusScheduleService.addBusSchedule(busScheduleData);
      console.log(res.data);
      window.location.reload(false);
    }
    catch(error){
      console.log(error);
    }
  }

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
              <DateTime name="arrivalTime" value={scheduleData.arrivalTime || ""}  label="Arrival Time" />
              <Input name="ticketPrice" value={scheduleData.ticketPrice || ""}  label="Ticket Price" />
              
           
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
