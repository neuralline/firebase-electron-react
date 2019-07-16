import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/auth";
import LandingPage from "./components/landing-page";
import Profile from "./components/profile";
import ProtectedRoute from "./components/protected-route";
import Signup from "./components/signup";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/app" component={Profile} />
          <Route exact path="/signup" component={Signup} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
