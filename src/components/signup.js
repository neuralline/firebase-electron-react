import React, { useCallback } from "react";
import Base from "./base";
import { withRouter } from "react-router-dom";

const Signup = ({ history }) => {
  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      const { username, password } = event.target.elements;
      try {
        await Base.auth().createUserWithEmailAndPassword(username, password);
        history.push("/app");
      } catch (err) {
        console.log(err);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="text" name="username" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default withRouter(Signup);
