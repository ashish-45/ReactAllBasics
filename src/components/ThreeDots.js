import React, { useState } from 'react';

const ThreeDots = () =>{

    const [data,setData] = useState({
        myName:"Ashish",
        Age:22,
        Qualification:"BE"
    })

    const handleChange = () => {
        setData({...data,Age:21})
    }

    return (
        <div>
            <h1>Name : {data.myName} , Age : {data.Age} , Qualification {data.Qualification}</h1>
            <button onClick={handleChange}>Update</button>
        </div>
    )
}

export default ThreeDots;
