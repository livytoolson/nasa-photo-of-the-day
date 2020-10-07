import React, { useState, useEffect } from "react";
import "./App.css";

// import the axios lib from node_modules
import axios from 'axios'

// import the contants from constants/index.js
import { BASE_URL, API_KEY } from './constants/index'

import Title from './Title'
import Image from './Image'
import Content from './Content'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
          setData(res.data)
        })
        .catch(err => {
          debugger
        })
  }, [])

  return (
    <div className="App">
    <h1>NASA PHOTO OF THE DAY</h1>
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
        <Title title={data.title}/>
        <Image image={data.url}/>
        <Content explanation={data.explanation} date={data.date}/>
      </p>
    </div>
  );
}

export default App;
