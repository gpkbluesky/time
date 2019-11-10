import 'main.scss'

import { Clock, FabMenu, Introducing } from 'components'

import React from 'react'
import { date } from 'constants/date'

const App = () => {
  const thatDay = date.job.junior

  return (
    <div className="App">
      <div className="group">
        {!!thatDay && (
          <>
            <Introducing date={thatDay} />
            <Clock date={thatDay} />
          </>
        )}
      </div>
      <FabMenu />
    </div>
  )
}

export default App
