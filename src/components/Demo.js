import React from 'react'
import { useState } from 'react';

const Demo = () => {

    // const [showPara, setShowPara] = useState(false)

    // const hideParagraps = () => {
    //     setShowPara(!showPara)
    // }


    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e)=>{
        setUserData({[e.target.name]:e.target.value})
    }

    const submitForm = () => {
        if (userData.email === "" || userData.password === "") {
            alert("Please enter email and password")
        }
        else {
            alert("You... did it")
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            {/* {
                showPara ? <p style={{ fontSize: '1rem' }}>Search for the keywords to learn more about each warning
                    Search for the keywords to learn more about each warning
                    Search for the keywords to learn more about each warning
                    Search for the keywords to learn more about each warning
                    Search for the keywords to learn more about each warning</p> : ""
            }

            <button onClick={hideParagraps}> {showPara ? "Hide" : "Show"} Paragraps </button> */}

            <form>
                <input type='email' placeholder='Enter Email Address' autoComplete="off" value={userData.email} onChange={handleChange} />
                <input type='password' placeholder='Enter Password' autoComplete="off" value={userData.password} onChange={handleChange} />
                <button onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}

export default Demo;