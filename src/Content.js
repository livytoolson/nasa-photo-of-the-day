// this will hold the explanation and the date of the image

import React from 'react'
import styled from 'styled-components'

// component styles
const StyledExplanation = styled.p`
    color: ${pr => pr.theme.white};
    font-family: sans-serif;
`

const StyledDate = styled.p`
    color: ${pr => pr.theme.white};
    margin-top: 1px;
    font-family: sans-serif;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    background-color: ${pr => pr.theme.background};
    border: 5px solid ${pr => pr.theme.nasaRed};
    padding: 20px;
    margin: 10px;
`

export default function Content(props) {
    const { explanation, date } = props

return (
    <StyledDiv>
        <StyledExplanation>{explanation}</StyledExplanation>
        <StyledDate>Date: {date}</StyledDate>
    </StyledDiv>
    )
}