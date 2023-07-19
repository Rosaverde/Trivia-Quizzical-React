import React from "react"
import {decode} from "html-entities"

export default function Question(props) {

    const shuffledAnswers = [...props.answers].sort(() => Math.random() - 0.5)

    return (
        <form className="question-form">
            <h5 className="question-text">{decode(props.question)}</h5>
            <div className="answers">
                <input type="radio" name="test" id={shuffledAnswers[0]} />
                <label htmlFor={shuffledAnswers[0]}>{decode(shuffledAnswers[0])}</label>
                <br />
                <input type="radio" name="test" id={shuffledAnswers[1]} />
                <label htmlFor={shuffledAnswers[1]}>{decode(shuffledAnswers[1])}</label>
                <br />
                <input type="radio" name="test" id={shuffledAnswers[2]} />
                <label htmlFor={shuffledAnswers[2]}>{decode(shuffledAnswers[2])}</label>
                <br />
                <input type="radio" name="test" id={shuffledAnswers[3]} />
                <label htmlFor={shuffledAnswers[3]}>{decode(shuffledAnswers[3])}</label>
                <br />
            </div>
        </form>
    )
}