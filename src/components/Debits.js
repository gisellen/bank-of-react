import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Debits extends Component {
    constructor(props){
        super(props);
        this.state = {
            debit: this.props.debit,
            isAdd: false,
            description: "",
            amount: 0,
            id: 0,
        }
        this.addDebit = this.addDebit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    addDebit = () => {
        this.setState({
            isAdd: true,
        })
    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value,
        })
    }

    onSubmit = () => {
        let arr = [...this.state.debit]
        let add = {
            id: this.state.id,
            description: this.state.description,
            amount: this.state.amount,
        }
        console.log(arr)
        console.log(add)
        arr.push(add)
        console.log(arr)
        this.setState(prevState => ({
            isAdd: false,
            debit: arr,
            id: prevState.id + 1,
            description: "",
            amount: 0,
        }))
    }
    render() {
        if(this.state.isAdd === true){
            return(
                <div>
                    <h1>ADD DEBIT</h1>
                    <form>
                        <label>
                        Description: 
                        <input type="text" name="description" onChange={this.onChange}/>
                        </label>
                        <label>
                            Amount: $
                            <input type="text" name="amount" onChange={this.onChange}/>
                        </label>
                    </form>
                    <button onClick={this.onSubmit}>Submit Debit</button>
                </div>
            )
        } else
        {
        return (
            <div>
                <h1>DEBITS</h1>
                <Link to="/">Home</Link>
                {this.state.debit.map(data => (
                    <div key={data.id}>
                        Description: {data.description} <br />
                        Date: {data.date} <br />
                        Amount: {data.amount} <br /><br />
                    </div>
                ))}
                <button onClick={this.addDebit}>Add debit</button>
            </div>
        )
    }
    }
}
