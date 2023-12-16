import React, { useState,useEffect } from 'react';
import Axios from 'axios'


const Hello = () => {

  // const [name,setName] = useState("Ashish");

  // const handleChange = () => {
  //   // let val = name;

  //  name === "Ashish" ? setName("Harshal") : setName("Ashish");

  // }


  const [data,setData] = useState([]);


  const fetchData = async()=>{

    try{
      let response = await Axios.get("https://jsonplaceholder.typicode.com/users");
      setData(response.data)
    }
    catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      {/* <h1>Hello {name}</h1>
      <button onClick={handleChange}>change Name</button> */}

      {
        data.map((datas,id)=>{
          return(
            <div>
                <p>{datas.name}</p>
            </div>
          )
        })
      }

    </div>
  )
}
export default Hello;