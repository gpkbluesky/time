import 'main.scss'

import { Clock, Introducing } from 'components'

import React from 'react'

const App = () => {
  const thatDay = '06/05/2019'

  return (
    <div className="App">
      <div className="group">
        <>
          <Introducing date={thatDay} />
          <Clock date={thatDay} />
        </>
      </div>
    </div>
  )
}

export default App
