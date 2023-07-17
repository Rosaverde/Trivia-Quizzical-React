import React from "react"

export default function Question() {
    return (
        <form className="question-form">
            <h2 className="question-text">Question</h2>
            <input type="radio" id="value1" />
            <label htmlFor="value1">Value 1</label>
            <br/>
            <input type="radio" id="value2" />
            <label htmlFor="value2">Value 2</label>
            <br/>
            <input type="radio" id="value3" />
            <label htmlFor="value3">Value 3</label>
            <br/>
            <input type="radio" id="value4" />
            <label htmlFor="value4">Value 4</label>
            <br/>

        </form>
    )
}