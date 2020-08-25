import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Our Components
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Search from "./pages/Search";
import Results from "./pages/Results";


function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
             <Route exact path="/login">
               </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/results">
              <Results />
            </Route>
            <ProtectedRoute exact path="/profile">
              <Profile />
            </ProtectedRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
