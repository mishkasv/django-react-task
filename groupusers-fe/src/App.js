import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import UsersListTable from "./components/User/UsersListTable";
import GroupsListTable from "./components/Group/GroupsListTable";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEditUser from "./components/User/CreateEditUset";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/users" exact component={() => <UsersListTable />} />
            <Route path="/users/:number" render={(props) => <CreateEditUser {...props}/>} />
            <Route path="/users/create" exact component={() => <CreateEditUser />} />
            <Route path="/groups" exact component={() => <GroupsListTable />} />
        </Switch>
      </Router>
      </Fragment>
    );
  }
}

export default App;