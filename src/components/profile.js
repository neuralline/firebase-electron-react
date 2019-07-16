import { Button } from "@material-ui/core";
import React from "react";
import Base from "./base";

const Profile = ({ history }) => {
  return (
    <>
      <h1>Have you seen sun?</h1>
      <p>
        {new Date()
          .toJSON()
          .slice(0, 10)
          .replace(/-/g, "/")}
      </p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          Base.auth().signOut();
          history.push("/");
        }}
      >
        Logout
      </Button>
    </>
  );
};

export default Profile;
