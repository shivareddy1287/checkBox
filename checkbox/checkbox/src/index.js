import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { Component } from "react";
// import "./App.css";

// class App extends Component {
//   state = { isCheckedInput: false, fromDateValue: "" };

//   onChangeCheckBoxStatus = (event) => {
//     this.setState({ isCheckedInput: event.target.checked });
//   };

//   onChangeFromDate = (event) => {
//     this.setState({ fromDateValue: event.target.value });
//     console.log(event.target.value);
//   };

//   render() {
//     const { isCheckedInput } = this.state;
//     return (
//       <div className="App">
//         <h1>Select Year</h1>

//         <input type="checkbox" onChange={this.onChangeCheckBoxStatus} />
//         <label>till-date</label>
//         <div className="checkbox-container">
//           <input onChange={this.onChangeFromDate} type="month" />-
//           {isCheckedInput && <span>till-date</span>}
//           {!isCheckedInput && <input type="month" />}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
