import React, { useContext } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import './UnderButton.scss';
import buttonSvg from './svg/button.svg'
const UnderButtonQuestion = (qid) => {
    let { qId } = useParams();
    return (
        <>
            <Link to={`../`}>
                <button type="button">
                    About
                </button></Link>
            <h1>Under the Button</h1>
            <h4>Q : {qId}/15</h4>
            <h2>The question</h2>
            <h2>The options</h2>
            <div class="container">
                <div class="toggle">
                    <input type="radio" name='options' />
                    <span class="button"></span>
                    <span class="label">Answer 1</span>
                </div>
                <div class="toggle">
                    <input type="radio" name='options' checked />
                    <span class="button"></span>
                    <span class="label">Answer 2</span>
                </div>
            </div>


            <div class="container">
    <input class="hidden radio-label" type="radio" name="accept-offers" id="yes-button"/>
    <label class="button-label" for="yes-button">
      <h1>Answer 1</h1>
    </label>
    <input class="hidden radio-label" type="radio" name="accept-offers" id="no-button"/>
    <label class="button-label" for="no-button">
      <h1>Answer 2</h1>
    </label>
    <input class="hidden radio-label" type="radio" name="accept-offers" id="maybe-button"/>
    <label class="button-label" for="maybe-button">
      <h1>Answer 3</h1>
    </label>
    <input class="hidden radio-label" type="radio" name="accept-offers" id="other-button"/>
    <label class="button-label" for="other-button">
      <h1>Answer 4</h1>
    </label>
</div>


            <Link to={`../${parseInt(qId) - 1}`}>
                <button type="button">
                    Back
                </button></Link>
            <Link to={`../${parseInt(qId) + 1}`}>
                <button type="button">
                    Next
                </button></Link>
        </>
    );
    // if answer selected then next button appears
    // if last question and all questions answered then submit button appears
}

export default UnderButtonQuestion;