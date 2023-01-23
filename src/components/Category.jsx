import React from 'react'

const categories = [
    "all",
    "burger",
    "hot dog",
    "sandwich",
    "fries",
    "topping",
    "drink",
    "extra",
];

function Category({ category, setCategory }) {
    const handleInput = (event) => setCategory(event.target.value)
    return (
        <fieldset>
            <legend>Category</legend>
            {categories.map((ele) => {
                return (
                    <label htmlFor={ele}>
                        <input
                            type="radio"
                            name="cat"
                            value={ele}
                            id={ele}
                            onChange={handleInput}
                            checked={ele === category}
                        />
                        {" "}
                        {ele}
                    </label>
                )
            })}
        </fieldset>
    )
}

export default Category