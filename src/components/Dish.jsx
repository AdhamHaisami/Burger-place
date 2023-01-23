import React from 'react'

function Dish({ title, dishDisc, price }) {
    return (
        <>
            <h3>{title}</h3>
            <p>{dishDisc}</p>
            <p>${price.toFixed(2)}</p>
        </>
    )
}

export default Dish