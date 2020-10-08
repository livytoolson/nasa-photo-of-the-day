// this will hold the explanation and the date of the image

import React from 'react'
import styled from 'styled-components'

// component styling
const StyledExplanation = styled.p`
    color: ${pr => pr.theme.white};
    @import url('https://fonts.googleapis.com/css2?family=Days+One&family=Roboto+Slab&display=swap');
    font-family: 'Roboto Slab', serif;
`

const StyledDate = styled.p`
    color: ${pr => pr.theme.white};
    margin-top: 1px;
    @import url('https://fonts.googleapis.com/css2?family=Days+One&family=Roboto+Slab&display=swap');
    font-family: 'Roboto Slab', serif;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    border: 3px solid ${pr => pr.theme.nasaRed};
    padding: ${pr => pr.theme.padding.large};
    margin-top: 7px;
    background-color: ${pr => pr.theme.nasaBlue};
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