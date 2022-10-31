import React, { useState, useEffect } from "react";
import { Avatar, Button, Paper,Grid, Typography,Container,TextField,} from "@mui/material";
import useStyles from "./styles";
import Input from "../../components/formComponents/Input";
import LoginService from "../../services/login";




const Auth = ({ setUser, user }) => {
  const[form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Input
                name="userName"
                label="User Name"
                value={form.userName}
                  handleChange={handleChange}
                // type="email"
                //   error={emailErrorMsg}
                //   errorText={emailErrorMsg}
              />
              <Input
                name="password"
                label="Password"
                value={form.password}
                  handleChange={handleChange}
                //   type={showPassword ? "text" : "password"}
                //   handleShowPassword={handleShowPassword}
                //   error={passwordErrorMsg}
                //   errorText={passwordErrorMsg}
              />
            </Grid>

            <Button
              type="submit"
              className={classes.submit}
              style={{ marginBottom: "15px", marginTop: "12px" }}
              fullWidth
              variant="contained"
              color="primary"
                disabled={!form.email || !form.password}
            >
              Sign in
            </Button>
          </form>
        </>
      </Paper>
    </Container>
  );
};

export default Auth;
