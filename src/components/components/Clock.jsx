import React, { useEffect, useState } from 'react'

import { BarLoader } from 'react-spinners'
import { loaderSettings } from 'settings/loader'

const Clock = ({ date }) => {
  const [day, setDay] = useState(0)
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const setDate = ({ day, hour, minute, second }) => {
    setDay(day)
    setHour(hour)
    setMinute(minute)
    setSecond(second)
  }

  const setTime = () => {
    let currentDate = new Date()
    let thatDate = new Date(date)
    let intervals = (currentDate - thatDate) / 1000

    let day = Math.floor(intervals / (60 * 60 * 24))
    day = day < 10 ? '0' + day : day
    intervals -= day * 60 * 60 * 24

    let hour = Math.floor(intervals / (60 * 60))
    hour = hour < 10 ? '0' + hour : hour
    intervals -= hour * 60 * 60

    let minute = Math.floor(intervals / 60)
    minute = minute < 10 ? '0' + minute : minute
    intervals -= minute * 60

    let second = Math.floor(intervals)
    second = second < 10 ? '0' + second : second

    setDate({
      day,
      hour,
      minute,
      second
    })
  }

  useEffect(() => {
    if (!!day || !!hour || !!minute || !!second) setIsLoading(false)
  }, [day, hour, minute, second])

  useEffect(() => {
    const timeInterval = setInterval(() => setTime(), 1000)
    return () => clearInterval(timeInterval)
  })

  return !isLoading ? (
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
  ) : (
    <BarLoader {...loaderSettings} />
  )
}

export default Clock
