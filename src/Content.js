// this will hold the explanation and the date of the image

import React from 'react'
import styled from 'styled-components'

// component styles
const StyledExplanation = styled.p`
    color: ${pr => pr.theme.white};
`

const StyledDate = styled.p`
    color: ${pr => pr.theme.white};
    margin-top: 1px; 
`

const StyledDiv = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    /* width: 65%; */
    background-color: ${pr => pr.theme.background};
    padding-bottom: 20px;
    padding-top: 20px;
    border-style: solid 5px ${pr => pr.theme.nasaRed};
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