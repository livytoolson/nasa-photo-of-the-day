import React, { useState, useEffect } from "react";
import "./App.css";

// import the axios lib from node_modules
import axios from 'axios'

// import the contants from constants/index.js
import { BASE_URL, API_KEY } from './constants/index'

import Title from './Title'
import Image from './Image'
import Content from './Content'

import styled from 'styled-components'

// component styling
const StyledBackground = styled.div`
  background-image: url(
    'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
    );
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
  font-family: 'Days One', sans-serif;
  font-size: 40px;
  color: ${pr => pr.theme.white};
`

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
    <StyledBackground className="App">
      <StyledTitle>NASA PHOTO OF THE DAY</StyledTitle>
        <Title title={data.title}/>
        <Image image={data.url}/>
        <Content explanation={data.explanation} date={data.date}/>
    </StyledBackground>
  );
}

export default App;
