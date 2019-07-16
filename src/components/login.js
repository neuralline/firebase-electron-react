import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useCallback, useContext } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { AuthContext } from "./auth";
import Base from "./base";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { username, password } = event.target.elements;
      try {
        await Base.auth().signInWithEmailAndPassword(
          username.value,
          password.value
        );
        history.push("/app");
      } catch (err) {
        console.log(err);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/app" />;
  }

  return (
    <div>
      <h1>Please login to continue</h1>
      <form onSubmit={handleLogin}>
        <FormControl fullWidth>
          <InputLabel>Email</InputLabel>
          <Input type="text" name="username" />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Password</InputLabel>
          <Input type="password" name="password" />
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default withRouter(Login);
