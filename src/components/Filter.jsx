import React, { useState } from 'react'

function Filter({ minVal, setMinVal, maxVal, setMaxVal }) {

    const handleVal = (event) => {
        if (event.target.name === 'min') {
            setMinVal(event.target.value)
        } else {
            setMaxVal(event.target.value)
        }
    }

    // const handleMax = (event) => {
    //     setMaxVal(event.target.value)
    // }
    return (
        <fieldset>
            <legend>Price</legend>
            <label htmlFor="min">
                Minimum Value
            </label>
            <input
                type="range"
                name="min"
                min='0'
                max='9'
                value={minVal}
                onChange={handleVal}
            />
            <br />
            <br />
            <label htmlFor="max">
                Maximum Value
            </label>
            <input
                type="range"
                name="max"
                min='0'
                max='9'
                value={maxVal}
                onChange={handleVal}

            />
        </fieldset>
    )
}

export default Filter