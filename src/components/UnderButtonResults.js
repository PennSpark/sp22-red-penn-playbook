import {
  Routes, Route, Outlet, Link, useNavigate,
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
    <>
        <h1>Here are your results!</h1>
        { rndInt === 1 && <h2>You are a {typeOfStudent} Penn student as you believe the right way to eat cereal is {answers[3]} and would rather have a {answers[7]} button in your life</h2>}
        { rndInt === 2 && <h2>You are a {typeOfStudent} Penn student as you would rather {answers[5]} and {answers[12]} </h2> }
        { rndInt === 3 && <h2>You are a {typeOfStudent} Penn student as your toilet paper preference is {answers[13]} and would rather know {answers[6]} </h2> }
        <h3>You chose the minority answer in {min}/15 of the questions</h3>
    </>
  )
}

export default UnderButtonResults
