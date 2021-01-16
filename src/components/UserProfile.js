import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class UserProfile extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <h1>User Profile</h1>
                <div>Username: {this.props.userName}</div>
                <div>Member since: {this.props.memberSince}</div>
            </div>
        )
    }
}

export default UserProfile
