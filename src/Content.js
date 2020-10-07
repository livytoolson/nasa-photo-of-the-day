// this will hold the explanation of the image

import React from 'react'

export default function Content(props) {
    const { explanation, date } = props

return (
    <div>
        <p>{explanation}</p>
        <p>{date}</p>
    </div>
    )
}