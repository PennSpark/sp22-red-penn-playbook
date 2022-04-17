import React, { useContext, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import UnderButtonQuestion from './UnderButtonQuestion';
import Navbar from './Navbar.js'
import './UnderButton.scss';
import axios from 'axios';
import { ReactComponent as LoginButton } from './svg/button-outline.svg';

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
            <Navbar />
            <div class="utb-description">
                {!qId && <h1>Under the Button</h1>}
                {!qId && <p>Under the Button is a quiz to see how average or ~ unique ~ of a Penn Student you are!
                    Be ready to express your opinions on some of the most controversal questions like milk or cereal first!</p>}
            </div>
            <div class="login-container">
                <div class="login">
                    {!qId && <h2>Log in</h2>}
                    {!qId && <LoginButton />}
                    <div class="login-inputs">
                        {!qId && <h4>Penn Email</h4>}
                        {!qId && <input onChange={e => setEmail(e.target.value)} type="name" className="form-control" id="name" />}
                    </div>
                    {!qId && email && <Link to="../1">
                        <button type="button" onClick={() => signUp()}>
                            Take the Quiz!
                        </button></Link>}
                </div>
            </div>
            {!qId && <br />}
            {qId && <UnderButtonQuestion qId={qId}></UnderButtonQuestion>}
        </>
    );
}

export default UnderButton;