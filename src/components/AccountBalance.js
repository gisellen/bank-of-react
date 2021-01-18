import React, { Component } from 'react'

export class AccountBalance extends Component {
    render() {
        return (
            <div>
                Account Balance: ${Math.round(((this.props.debit - this.props.credit) * 100) / 100).toFixed(2)} <br />
                Debit: ${this.props.debit} <br />
                Credit:  ${this.props.credit}
            </div>
        )
    }
}

export default AccountBalance
