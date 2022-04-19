import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import './UnderButton.scss';
import buttonSvg from './svg/button.svg'
import axios from 'axios';
const UnderButtonQuestion = (qid) => {
    let { qId } = useParams()
    const [ans, setAns] = useState('')
    const loadBack = (qId > 1) && (qId < 16)
    const loadNext = (qId > 0) && (qId < 15) && (ans !== '')
    const [question, setQuestion] = useState('')
    // const [submit, setSubmit] = useState(false)
    const loadRes = (parseInt(qId) === 15) && ans
    const navigate = useNavigate()
    // console.log(qid)
    // console.log(loadBack)

    // useEffect(() => {
    //     const getSubmit = async () => {
    //         try {
    //             if (parseInt(qId) === 15) {
    //                 console.log("here")
    //                 const { data } = await axios.get('/api/allAnswered')
    //                 setSubmit(data.submit)
    //                 console.log("submit" + submit)
    //             }
    //         } catch (e) {
    //             alert('An error occured. Please try again.')
    //         }
    //     }

    //     getSubmit()
    // }, [qId])

    useEffect(() => {
        const getQuestion = async () => {
            try {
                const { data } = await axios.post('/api/question', { number: qId })
                setQuestion(data)
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
            if (parseInt(qId) === 15) {
                console.log("here")
                navigate(`../results`)
            } else {
                navigate(`../${parseInt(qId) + 1}`)
                for (var i = 0; i < ele.length; i++)
                    ele[i].checked = false;
            }
            
        } catch (e) {
            alert('An error occured. Please try again.')
        }
    }
    const back = () => {
        setAns('')
        var ele = document.getElementsByName("accept-offers");
        navigate(`../${parseInt(qId) + 1}`)
        for (var i = 0; i < ele.length; i++)
            ele[i].checked = false;
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
                {/* {(parseInt(qId) === 15)  && <h4> All 15 questions must be answered to submit! </h4>} */}
            </div>
            <div class="container button-container">
                <input class="hidden radio-label" onChange={e => setAns(1)} type="radio" name="accept-offers" id="yes-button" />
                <label class="button-label" for="yes-button">
                    <h1>A</h1>
                </label>
                <input class="hidden radio-label" onChange={e => setAns(2)} type="radio" name="accept-offers" id="no-button" />
                <label class="button-label" for="no-button">
                    <h1>B</h1>
                </label>
                {question.op3 && <input class="hidden radio-label" onChange={e => setAns(3)} type="radio" name="accept-offers" id="maybe-button" />}
                {question.op4 && <label class="button-label" for="maybe-button">
                    <h1>C</h1>
                </label>}
                {question.op4 && <input class="hidden radio-label" onChange={e => setAns(4)} type="radio" name="accept-offers" id="other-button" />}
                {question.op4 && <label class="button-label" for="other-button">
                    <h1>D</h1>
                </label>}
                
            </div>

            
            {loadBack &&
                <button type="button" onClick={() => back()}>
                    Back
                </button>}
            {loadNext &&
                <button type="button" onClick={() => updateAnswer()}>
                    Next
                </button>}
            {loadRes && 
                <button type="button" onClick={() => updateAnswer()}>
                    Submit!
                </button>}
        </>
    );
}

export default UnderButtonQuestion;