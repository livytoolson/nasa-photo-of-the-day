// this will hold the image
import React from 'react'
// import styled from 'styled-components'

export default function Image(props) {
    const { image } = props

return (
    <div>
        <img src={image} alt=''/>
    </div>
)
}