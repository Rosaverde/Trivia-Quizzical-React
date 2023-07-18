import React from "react"

export default function Question(props) {

    const shuffledAnswers = [...props.answers].sort(() => Math.random() - 0.5)

    return (
        <form className="question-form">
            <h5 className="question-text">{props.question}</h5>
            <div className="answers">
                <input type="radio" id="value1" />
                <label htmlFor="value1">{shuffledAnswers[0]}</label>
                <br />
                <input type="radio" id="value2" />
                <label htmlFor="value2">{shuffledAnswers[1]}</label>
                <br />
                <input type="radio" id="value3" />
                <label htmlFor="value3">{shuffledAnswers[2]}</label>
                <br />
                <input type="radio" id="value4" />
                <label htmlFor="value4">{shuffledAnswers[3]}</label>
                <br />
            </div>

        </form>
    )
}