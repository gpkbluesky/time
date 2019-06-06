import React, { useState, useEffect } from "react";
import Moment from "moment";
import "./App.css";

const App = () => {
  const thatDay = "06/05/2019";

  const [day, setDay] = useState("0");
  const [hour, setHour] = useState("0");
  const [minute, setMinute] = useState("0");
  const [second, setSecond] = useState("0");

  useEffect(() => {
    setInterval(() => {
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

      setDay(day);
      setHour(hour);
      setMinute(minute);
      setSecond(second);
    }, 1000);
  });

  return (
    <div className="App">
      <div className="group">
        <div className="introducing">
          <p>
            Tính từ ngày {Moment(thatDay).format("DD-MM-YYYY")} thì đã được:
          </p>
        </div>
        <div className="clock">
          <div className="clock-element day">
            <p className="number">{day}</p>
            <p className="text">NGÀY</p>
          </div>
          <div className="clock-element dot dot1">
            <span>:</span>
          </div>
          <div className="clock-element hour">
            <p className="number">{hour}</p>
            <p className="text">GIỜ</p>
          </div>
          <div className="clock-element dot dot2">
            <span>:</span>
          </div>
          <div className="clock-element minute">
            <p className="number">{minute}</p>
            <p className="text">PHÚT</p>
          </div>
          <div className="clock-element dot dot3">
            <span>:</span>
          </div>
          <div className="clock-element second">
            <p className="number">{second}</p>
            <p className="text">GIÂY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
