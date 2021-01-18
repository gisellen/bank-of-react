import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from './AccountBalance'

export default class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totCredit: 0,
      debit: this.props.debit,
      credit: this.props.credit,
      isAdd: false,
      description: "",
      date: "",
      amount: 0,
      id: 0,
    };
    this.calcCredit = this.calcCredit.bind(this);
    this.addCredit = this.addCredit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => {
    this.calcCredit();
  };

  calcCredit = () => {
    let amount = 0;
    this.state.credit.map((data) => {
      amount += data.amount;
    });
    this.setState({
      totCredit: amount,
    });
  };

  addCredit = () => {
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
    let arr = [...this.state.credit];
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
      totCredit: prevState.totCredit + parseInt(this.state.amount),
      isAdd: false,
      credit: arr,
      id: prevState.id + 1,
      description: "",
      amount: 0,
    }));
  };

  render() {
    if (this.state.isAdd === true) {
      return (
        <div>
          <h1>ADD CREDIT</h1>
          <form>
            <label>
              Description:
              <input type="text" name="description" onChange={this.onChange} />
            </label>
            <label>
              Amount: $
              <input type="text" name="amount" onChange={this.onChange} />
            </label>
          </form>
          <button onClick={this.onSubmit}>Submit Credit</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>CREDITS</h1>
          <Link to="/">Home</Link>
          <h2>Total Credits: ${this.state.totCredit}</h2>
          <AccountBalance credit={this.state.totCredit} debit={this.state.debit}/> <br />
          {this.state.credit.map((data) => (
            <div key={data.id}>
              Description: {data.description} <br />
              Date: {data.date} <br />
              Amount: {data.amount} <br />
              <br />
            </div>
          ))}
          <button onClick={this.addCredit}>Add credit</button>
        </div>
      );
    }
  }
}
