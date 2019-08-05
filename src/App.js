import React, { Component } from "react";
import { BarLoader } from "react-spinners";
import Moment from "moment";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      thatDay: "06/05/2019",
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      isLoading: false
    }
  }

  componentWillMount() {
    this.timeInterval = setInterval(() => this.setTime(), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state
      && (this.state.day !== prevState.day
        || this.state.hour !== prevState.hour
        || this.state.minute !== prevState.minute
        || this.state.second !== prevState.second))
      this.setState({ ...this.state, isLoading: true });
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  setTime = () => {
    let { thatDay } = this.state;

    let currentDate = new Date();
    let thatDate = new Date(thatDay);
    let intervals = (currentDate - thatDate) / 1000;

    let day = Math.floor(intervals / (60 * 60 * 24));
    day = day < 10 ? "0" + day : day;
    intervals -= day * 60 * 60 * 24;

    let hour = Math.floor(intervals / (60 * 60));
    hour = hour < 10 ? "0" + hour : hour;
    intervals -= hour * 60 * 60;

    let minute = Math.floor(intervals / 60);
    minute = minute < 10 ? "0" + minute : minute;
    intervals -= minute * 60;

    let second = Math.floor(intervals);
    second = second < 10 ? "0" + second : second;

    this.setState({
      day,
      hour,
      minute,
      second
    });
  }

  render() {
    return (
      <div className="App">
        <div className="group">
          {this.state.isLoading
            ? <>
              <div className="introducing">
                <p>
                  Tính từ ngày {Moment(this.state.thatDay, 'YYYY-M-D').format("DD-MM-YYYY")} thì đã được:
                </p>
              </div>
              <div className="clock">
                <div className="clock-element day">
                  <p className="number">{this.state.day}</p>
                  <p className="text">NGÀY</p>
                </div>
                <div className="clock-element dot dot1">
                  <span>:</span>
                </div>
                <div className="clock-element hour">
                  <p className="number">{this.state.hour}</p>
                  <p className="text">GIỜ</p>
                </div>
                <div className="clock-element dot dot2">
                  <span>:</span>
                </div>
                <div className="clock-element minute">
                  <p className="number">{this.state.minute}</p>
                  <p className="text">PHÚT</p>
                </div>
                <div className="clock-element dot dot3">
                  <span>:</span>
                </div>
                <div className="clock-element second">
                  <p className="number">{this.state.second}</p>
                  <p className="text">GIÂY</p>
                </div>
              </div>
            </>
            : <div className="group">
              <BarLoader
                height={5}
                width={150}
                color={'#4A90E2'}
              />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default App;
