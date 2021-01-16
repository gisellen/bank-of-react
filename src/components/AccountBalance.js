import React, { Component } from 'react'

export class AccountBalance extends Component {
    render() {
        return (
            <div>
                Balance: ${this.props.accountBalance} <br />
                Debit: ${this.props.debit} <br />
                Credit:  ${this.props.credit}
            </div>
        )
    }
}

export default AccountBalance
