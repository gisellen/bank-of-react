import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

export default class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totDebit: 0,
      debit: this.props.debit,
      isAdd: false,
      description: "",
      date: "",
      amount: 0,
      id: 0,
    };
    this.calcDebit = this.calcDebit.bind(this);
    this.addDebit = this.addDebit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount = () => {
    this.calcDebit();
  };

  calcDebit = () => {
    let amount = 0;
    this.state.debit.map((data) => {
      amount += data.amount;
    });
    this.setState({
      totDebit: amount,
    });
  };

  addDebit = () => {
    this.setState({
      isAdd: true,
    });
  };

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  onSubmit = () => {
    let arr = [...this.state.debit];
    let add = {
      id: this.state.id,
      description: this.state.description,
      date: Date().toLocaleString(),
      amount: this.state.amount,
    };
    console.log(arr);
    console.log(add);
    arr.push(add);
    console.log(arr);
    this.setState((prevState) => ({
      totDebit: prevState.totDebit + parseInt(this.state.amount),
      isAdd: false,
      debit: arr,
      id: prevState.id + 1,
      description: "",
      amount: 0,
    }));
  };
  render() {
    if (this.state.isAdd === true) {
      return (
        <div>
          <h1>ADD DEBIT</h1>
          <form>
            <label>
              Description:
              <input type="text" name="description" onChange={this.onChange} />
            </label>
            <label>
              Amount: $
              <input
                type="text"
                patter="[0-9]"
                name="amount"
                onChange={this.onChange}
              />
            </label>
          </form>
          <button onClick={this.onSubmit}>Submit Debit</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>DEBITS</h1>
          <Link to="/">Home</Link>
          <h2>Total Debits: ${this.state.totDebit}</h2>
          {this.state.debit.map((data) => (
            <div key={data.id}>
              Description: {data.description} <br />
              Date: {data.date} <br />
              Amount: {data.amount} <br />
              <br />
            </div>
          ))}
          <button onClick={this.addDebit}>Add debit</button>
        </div>
      );
    }
  }
}
