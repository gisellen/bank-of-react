import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Debits extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                {this.props.debit.map(data => (
                    <div key={data.id}>
                        Description: {data.description} <br />
                        Date: {data.date} <br />
                        Amount: {data.amount} <br /><br />
                    </div>
                ))}
            </div>
        )
    }
}
