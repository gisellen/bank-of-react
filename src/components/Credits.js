import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Credits extends Component {
    render() {
        return (
            <div>
                <h1>CREDITS</h1>
                <Link to="/">Home</Link>
                {this.props.credit.map(data => (
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
