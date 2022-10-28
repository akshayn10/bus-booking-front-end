import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@mui/material";

import useStyles from "./styles";

import Input from "../../components/formComponents/Input";

const Bus = ({ role, setUser, user }) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <>
          <Typography component="h1" variant="h5">
            Adding New Bus
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Input name="busNumber" label="Bus Number" />
              <Input name="seatCount" label="Seat Count" />
            </Grid>

            <Button
              type="submit"
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

export default Bus;
