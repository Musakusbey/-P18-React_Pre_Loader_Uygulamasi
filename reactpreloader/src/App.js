import React, { useState, useEffect } from 'react'
import './App.css'
import HashLoader from "react-spinners/HashLoader";

const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    }, 6000)

  }, []);
  return (
    <div className='App'>
      {
        loading ?
          <HashLoader
            color={'D0021B'}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <center>
            <img src="https://c.tenor.com/32nHeCvxlwEAAAAM/you-tube-like-and-subscribe.gif" />
          </center>
      }
    </div>
  )
}

export default App