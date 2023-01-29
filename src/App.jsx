import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import Appheader from './components/App-header/Appheader'
import routes from './router'

const App = memo(() => {
  return (
    <div className='app'>
      <div className='header'>
        <Appheader></Appheader>
      </div>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <div className='footer'>footer</div>
    </div>
  )
})

export default App
