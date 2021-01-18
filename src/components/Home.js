import React, { Component } from 'react'
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import "../App.css";

// packages used: react-moment, react-router-dom

export class Home extends Component {
    render() {
        return (
            <div>
              <img src="https://m.economictimes.com/thumb/msid-71487585,width-1200,height-900,resizemode-4,imgsize-169788/bank-getty.jpg" alt="bank" className="bank-img" />
              <h1>Bank of React</h1>
              <Link to="/userProfile">User Profile</Link><br />
              <Link to="/Debits">Debits Page</Link><br />
              <Link to="/Credits">Credits Page</Link>
              <AccountBalance accountBalance={this.props.accountBalance} debit={this.props.debit} credit={this.props.credit}/>
            </div>
        )
    }
}

export default Home
