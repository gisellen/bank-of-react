import React, { Component } from 'react'
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <div>
              <img src="https://medici-prod.s3-us-west-2.amazonaws.com/uploads/404page8.jpg" alt="bank"/>
              <h1>Bank of React</h1>
              <Link to="/userProfile">User Profile</Link>
              <AccountBalance accountBalance={this.props.accountBalance} />
            </div>
        )
    }
}

export default Home