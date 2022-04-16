import React, { useContext, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import UnderButtonQuestion from './UnderButtonQuestion';
import Navbar from './Navbar.js'
import './UnderButton.scss';
import axios from 'axios';

const UnderButton = () => {
    let { qId } = useParams()
    const [email, setEmail] = useState('')
    const signUp = async () => {
        try {
            await axios.post('/api/signup', { email: email })
        } catch (e) {
            console.log(e)
            alert('An error occured. Please try again.')
        }
    }
    return (
        <>
        <Navbar/>
            {!qId && <h1>Under the Button</h1>}
            {!qId && <h4>Under the Button is a quiz to see how average or ~ unique ~ of a Penn Student you are!
                Be ready to express your opinions on some of the most controversal questions like milk or cereal first!</h4>}

            {!qId && <h4>Penn Email</h4>}
            {!qId && <input onChange={e => setEmail(e.target.value)} type="name" className="form-control" id="name" />}
            {!qId && <br />}
            {!qId && email && <Link to="../1">
                <button type="button" onClick={() => signUp()}>
                    Take the Quiz!
                </button></Link>}
            {qId && <UnderButtonQuestion qId={qId}></UnderButtonQuestion>}
        </>
    );
}

export default UnderButton;