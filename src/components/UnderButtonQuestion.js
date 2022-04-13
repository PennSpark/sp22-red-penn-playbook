import React, { useContext, useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import './UnderButton.scss';
import buttonSvg from './svg/button.svg'
import axios from 'axios';
const UnderButtonQuestion = (qid) => {
    let { qId } = useParams()
    const [ans, setAns] = useState('')
    const loadBack = (qId > 1) && (qId < 16)
    const loadNext = (qId > 0) && (qId < 15) && (ans !== '')
    const loadRes = (parseInt(qId) === 15)
    console.log(loadRes)
    const [question, setQuestion] = useState('')

    // console.log(qid)
    // console.log(loadBack)
    useEffect(() => {
        const getQuestion = async () => {
            try {
                const { data } = await axios.post('/api/question', { number: qId })
                setQuestion(data)
                console.log("here")
            } catch (e) {
                alert('An error occured. Please try again.')
            }
        }

        getQuestion()
    }, [qId])
    const updateAnswer = async () => {
        try {
            const user = await axios.get('/api/user')
            await axios.post(`/api/updateAns${qId}`, { _id: user.data.id, ans: ans })
            setAns('')
            var ele = document.getElementsByName("accept-offers");
            for (var i = 0; i < ele.length; i++)
                ele[i].checked = false;
        } catch (e) {
            alert('An error occured. Please try again.')
        }
    }
    return (
        <>
            {/* <Link to={`../`}>
                <button type="button">
                    About
                </button></Link> */}
            <div class="text-container">
                <h1>Under the Button</h1>
                <h4>Q : {qId}/15</h4>
                {console.log(question)}
                {console.log(qId)}
                <h2>{question.text}</h2>
                <h3>A) {question.op1}</h3>
                <h3>B) {question.op2}</h3>
                {question.op3 && <h3>C) {question.op3}</h3>}
                {question.op4 && <h3>D) {question.op4}</h3>}
            </div>
            <div class="container button-container">
                <input class="hidden radio-label" onChange={e => setAns("A")} type="radio" name="accept-offers" id="yes-button" />
                <label class="button-label" for="yes-button">
                    <h1>A</h1>
                </label>
                <input class="hidden radio-label" onChange={e => setAns("B")} type="radio" name="accept-offers" id="no-button" />
                <label class="button-label" for="no-button">
                    <h1>B</h1>
                </label>
                {question.op3 && <input class="hidden radio-label" onChange={e => setAns("C")} type="radio" name="accept-offers" id="maybe-button" />}
                {question.op4 && <label class="button-label" for="maybe-button">
                    <h1>C</h1>
                </label>}
                {question.op4 && <input class="hidden radio-label" onChange={e => setAns("D")} type="radio" name="accept-offers" id="other-button" />}
                {question.op4 && <label class="button-label" for="other-button">
                    <h1>D</h1>
                </label>}
            </div>


            {loadBack && <Link to={`../${parseInt(qId) - 1}`}>
                <button type="button">
                    Back
                </button></Link>}
            {loadNext && <Link to={`../${parseInt(qId) + 1}`}>
                <button type="button" onClick={() => updateAnswer()}>
                    Next
                </button></Link>}
            {loadRes && <Link to={`../results`}>
                <button type="button" onClick={() => updateAnswer()}>
                    Submit!
                </button></Link>}
        </>
    );
}

export default UnderButtonQuestion;