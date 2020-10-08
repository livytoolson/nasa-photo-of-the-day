// this while hold the title of the image
import React from 'react'
import styled from 'styled-components'

// component styling
const StyledTitle = styled.div`
    border: 3px solid ${pr => pr.theme.nasaRed};
    padding: ${pr => pr.theme.padding.small};
    margin-bottom: 10px;
    color: ${pr => pr.theme.white};
    width: 25%;
    font-size: 10px;
    background-color: ${pr => pr.theme.nasaBlue};
`

export default function Title(props) {
    const { title } = props

return (
    <StyledTitle>
        <h2>{title}</h2>
    </StyledTitle>
    )
}