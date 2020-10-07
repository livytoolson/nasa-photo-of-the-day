import React, { useState, useEffect } from "react";
import "./App.css";

// import the axios lib from node_modules
import axios from 'axios'

// import the contants from constants/index.js
import { BASE_URL, API_KEY } from './constants/index'

// import Details from './Details'

function App() {

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchPhotos = () => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          debugger
        })
    }
    fetchPhotos()
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
