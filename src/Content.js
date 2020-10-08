
// this will hold the explanation and the date of the image

import React from 'react'
import styled from 'styled-components'

const StyledBackground = styled.div`
  background-color: 'grey';
`

export default function Content(props) {
    const { explanation, date } = props

return (
    <StyledBackground>
        <p>{explanation}</p>
        <p>{date}</p>
    </StyledBackground>
    )
}