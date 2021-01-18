import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import UserProfile from "./UserProfile"
import Login from "./Login"
import axios from 'axios'
import Debits from './Debits'
import Credits from './Credits'

class App extends Component {
  constructor(){
    super();

    this.state ={
      accountBalance: 12032.32,
      credit: [],
      debit: [],
      totCredit: 0,
      totDebit: 0,
      currentUser: {
        userName: 'giselled',
        memberSince: '01/12/21',
      }
    }
  this.credit = this.credit.bind(this)
  this.debit = this.debit.bind(this)
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.state({currentUser: newUser})
  }


  componentDidMount = async () =>{
    this.debit();
    this.credit();
}

credit = () => {
    axios.get('https://moj-api.herokuapp.com/credits')
    .then(res =>{
        res.data.map((data) => {
            this.setState({
                totCredit: this.state.totCredit + data.amount,
            })
        })
        this.setState({
          credit: res.data,
        })
    })
    .catch((err) => console.log(err))
}

debit = () => {
    axios.get('https://moj-api.herokuapp.com/debits')
    .then(res =>{
        res.data.map((data) => {
            this.setState({
                totDebit: this.state.totDebit + data.amount
            })
        })
        this.setState({
          debit: res.data,
        })
    })
    .catch((err) => console.log(err))
}


  render() {
    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props} />)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} debit={this.state.totDebit} credit={this.state.totCredit}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>)
    const DebitsComponent = () => (<Debits debit={this.state.debit} />)
    const CreditsComponent = () => (<Credits credit={this.state.credit} />)
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/Debits" render={DebitsComponent} />
          <Route exact path="/Credits" render={CreditsComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
