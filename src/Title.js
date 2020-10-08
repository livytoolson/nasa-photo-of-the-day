// this while hold the title of the image
import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
    background-color: ${pr => pr.theme.background};
    border: 5px solid ${pr => pr.theme.nasaRed};
    padding: 7px;
    margin: 10px;
    color: ${pr => pr.theme.white};
    width: 65%;
`

export default function Title(props) {
    const { title } = props

return (
    <StyledTitle>
        <h2>{title}</h2>
    </StyledTitle>
    )
}