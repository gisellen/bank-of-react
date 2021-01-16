import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import UserProfile from "./UserProfile"
import Login from "./Login"

class App extends Component {
  constructor(){
    super();

    this.state ={
      accountBalance: 12032.32,
      currentUser: {
        userName: 'giselled',
        memberSince: '01/12/21',
      }
    }
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.state({currentUser: newUser})
  }
  render() {
    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props} />)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>)
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
