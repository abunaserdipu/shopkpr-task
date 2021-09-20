import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Homepage/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import ManageGroups from "./components/ManageGroups/ManageGroups";
import ManageRoles from "./components/ManageRoles/ManageRoles";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Switch>
          <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/dash-board/admin/manage-user">
              <Home />
            </Route>
            <Route exact path="/dash-board/admin/manage-groups">
              <ManageGroups />
            </Route>
            <Route exact path="/dash-board/admin/manage-roles">
              <ManageRoles />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
