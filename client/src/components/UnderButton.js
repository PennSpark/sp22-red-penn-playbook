import React, { useContext, useState } from 'react'
import { useNavigate, useParams, Link } from "react-router-dom"
import UnderButtonQuestion from './UnderButtonQuestion';
import UnderButtonResults from './UnderButtonResults';
import './UnderButton.scss';
import axios from 'axios';
import { ReactComponent as LoginButton } from './svg/button-outline.svg';

const UnderButton = () => {
    let { qId } = useParams()
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const signUp = async () => {
        try {
            await axios.post('/api/signup', { email: email })
        } catch (e) {
            console.log(e)
            alert('An error occured. Please try again.')
        }
    }
    const about = () => {
        navigate(`../../about/under-the-button`);
    }
    return (
        <>
            {!qId && <div className="login-about-container">
            {!qId && <button type="button" className="utb-about" onClick={() => about()}>About</button>}
            </div>}
            {!qId && <div class="utb-description">
                {!qId && <h1>By the Button</h1>}
                {!qId && <p>Not a Penn student? Unfortunately, this quiz is reserved for Penn students but please check out the other installations in Penn Playbook!</p>}
            </div>}
            {!qId && <div class="login-container">
                <div class="login">
                    {!qId && <h2>Log in</h2>}
                    {!qId && <LoginButton />}
                    <div class="login-inputs">
                        {!qId && <h4 className="penn-email">Penn Email</h4>}
                        {!qId && <input onChange={e => setEmail(e.target.value)} type="name" className="form-control" id="name" />}
                    </div>
                    {!qId && email && String(email).includes('upenn.edu') && <Link to="../1">
                        <button type="button" onClick={() => signUp()} className="log-in">
                            Log In
                        </button></Link>}
                </div>
            </div>}
            {!qId && <br />}
            {qId && qId == "results" && <UnderButtonResults />}
            {qId && qId != "results" && <UnderButtonQuestion qId={qId}></UnderButtonQuestion>}
        </>
    );
}

export default UnderButton;