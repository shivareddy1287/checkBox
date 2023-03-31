import { Component } from "react";
import "./App.css";

const listItems = [
  {
    name,
  },
];

class App extends Component {
  state = { isCheckedInput: false, fromDateValue: "" };

  onChangeCheckBoxStatus = (event) => {
    this.setState({ isCheckedInput: event.target.checked });
  };

  onChangeFromDate = (event) => {
    this.setState({ fromDateValue: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { isCheckedInput } = this.state;
    return <div className="App"></div>;
  }
}

export default App;

// <h1>Select Year</h1>

// <input type="checkbox" onChange={this.onChangeCheckBoxStatus} />
// <label>till-date</label>
// <div className="checkbox-container">
//   <input onChange={this.onChangeFromDate} type="month" />-
//   {isCheckedInput && <span>till-date</span>}
//   {!isCheckedInput && <input type="month" />}
// </div>
