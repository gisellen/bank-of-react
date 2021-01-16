import React, { Component } from 'react'

export class AccountBalance extends Component {
    render() {
        return (
            <div>
                Balance:{this.props.accountBalance}
            </div>
        )
    }
}

export default AccountBalance
