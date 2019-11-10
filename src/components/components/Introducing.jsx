import Moment from 'moment'
import React from 'react'

const Introducing = ({ date }) => (
  <div className="introducing">
    <p>Tính từ ngày {Moment(date).format('DD-MM-YYYY')} thì đã được:</p>
  </div>
)

export default Introducing
