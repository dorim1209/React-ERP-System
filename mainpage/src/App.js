import React from 'react';
import Attendance from './Attendance';
import AttendanceResult from './AttendanceResult';
import axios from 'axios';

import './App.css';

class App extends React.Component {

  state = {
    isResult: false,
    name: '',
    time: '',
    type: '',
    NFC: ''
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      NFC: e.target.value
    });
  }

  getLoginResult = async () => {
    const {
      data: {
        name,
        time,
        type
      }
    } = await axios.get(
      "http://localhost:4000"
    );
    console.log("qweqweqweqwe : ", name, time, type);

    this.setState({ name, time, type });
  };

  send = async () => {
    await axios.get('http://localhost:4000/users', {
      params: {
        result: this.state.NFC
      }
    })
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getLoginResult();
    console.log("ㅁㄴㅇㅁㄴㅇㅁㄴㅇ : ", this.state.NFC);
  }

  componentDidUpdate() {
    if (this.state.isResult === true) {
      setTimeout(function () {
        this.setState({ isResult: false, NFC: ''})
      }.bind(this), 5000)
    }
  }

  AttendanceResult = (e) => {
    this.setState({ isResult: true });
    this.getLoginResult();
    this.send();
    e.preventDefault();
  };

  render() {
    const { isResult, name, time, type } = this.state;
    return (
      <div className="App">
        <center>
          <p className="title">출근 관리 시스템</p>
          {isResult ?
            <AttendanceResult
              name={name}
              time={time}
              type={type}
            /> : <Attendance />}
          <form>
            <input name="Attendance_NFC" value={this.state.NFC} onChange={this.handleChange} type="text" placeholder="NFC" autofocus="autofocus" autocomplete="off" />
            <button type='submit' onClick={this.AttendanceResult}>Check</button>
          </form>
        </center>
      </div>
    );
  }
}

export default App;