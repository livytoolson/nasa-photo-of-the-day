// this will hold the image
import React from 'react'
// import styled from 'styled-components'

// const StyledImage = styled.div`
//     background-color: ${pr => pr.theme.background};
// `

export default function Image(props) {
    const { image } = props

return (
    <div>
        <img src={image} alt=''/>
    </div>
)
}