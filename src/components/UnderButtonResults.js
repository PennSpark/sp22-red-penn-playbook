import {
  Routes, Route, Outlet, Link, useNavigate,
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './UnderButtonResults.css';

const UnderButtonResults = () => {
  const [typeOfStudent, setTypeOfStudent] = useState('')
  const [min, setMin] = useState(0)
  const [answers, setAnswers] = useState([])
  const rndInt = Math.floor(Math.random() * 3) + 1
  useEffect(() => {
    const getResults = async () => {
        try {
            const { data } = await axios.get('/api/getMinAnsCount')
            setAnswers(data.answers)
            setMin(data.count)
            if (min < 3) {
              setTypeOfStudent("super basic")
            } else if (min < 6) {
              setTypeOfStudent("kinda basic")
            } else if (min < 9) {
              setTypeOfStudent("average")
            } else if (min < 12) {
              setTypeOfStudent("semi-quirky")
            } else {
              setTypeOfStudent("quirky")
            }
            console.log("here")
        } catch (e) {
            alert('An error occured. Please try again.')
        }
    }

    getResults()
}, [min])
  return (
    <div>
        <h1 className="results-h1">By the Button</h1>
        { rndInt === 1 && answers[3] == "milk first" && <h2 className="results-h2">You are a {typeOfStudent} Penn student who prefers crispy cereal and would rather have a {answers[7]} in your life</h2>}
        { rndInt === 1 && answers[3] == "cereal first" && <h2 className="results-h2">You are a {typeOfStudent} Penn student who prefers soggy cereal and would rather have a {answers[7]} in your life</h2>}
        { rndInt === 1 && answers[3] == "no cereal" && <h2 className="results-h2">You are a {typeOfStudent} Penn student who doesn't like cereal and would rather have a {answers[7]} in your life</h2>}
        { rndInt === 1 && answers[3] == "~ warm ~ cereal" && <h2 className="results-h2">You are a {typeOfStudent} Penn student who prefers warm cereal and would rather have a {answers[7]} in your life</h2>}
        { rndInt === 2 && answers[5] == "change genders every time you sneeze" && <h2 className="results-h2">You are a {typeOfStudent} Penn student who would have an identity crisis during allergy season</h2> }
        { rndInt === 2 && answers[5] == "not be able to tell the difference between babies and muffins" && <h2 className="results-h2">You are a {typeOfStudent} Penn student who probably wants to eat babies </h2> }
        { rndInt === 3 && answers[14] == "oversleep every day for a week" && <h2 className="results-h2">You are a {typeOfStudent} Penn student who probably shows up late to every class from oversleeping </h2> }
        { rndInt === 3 && answers[14] == "no sleep for 4 days" && <h2 className="results-h2">You are a {typeOfStudent} Penn student who probably pulls way too many all-nighters </h2> }
        <h3 className="results-h3">You chose the minority answer in {min}/15 of the questions</h3>
    </div>
  )
}

export default UnderButtonResults
