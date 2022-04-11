import React, { useContext } from 'react'
import { useParams, Link } from "react-router-dom"
import UnderButtonQuestion from './UnderButtonQuestion';
import Navbar from './Navbar.js'
const UnderButton = () => {
    let { qId } = useParams();
    return (
        <>
        <Navbar/>
            {!qId && <h1>Under the Button</h1>}
            {!qId && <h4>Under the Button is a quiz to see how average or ~ unique ~ of a Penn Student you are!
                Be ready to express your opinions on some of the most controversal questions like milk or cereal first!</h4>}
            {!qId && <Link to="../1">
                <button type="button">
                    Take the Quiz!
                </button></Link>}
            {qId && <UnderButtonQuestion qId={qId}></UnderButtonQuestion>}
        </>
    );
}

export default UnderButton;