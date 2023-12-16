import React, { useState } from 'react'

const Array = () => {

    const data = [
        {
            id:0,
            myName:"Ashish",
            Age:22
        },
        {
            id:1,
            myName:"Harshal",
            Age:17
        },
        {
            id:2,
            myName:"Vinu",
            Age:18
        },
        {
            id:2,
            myName:"Pihu",
            Age:18
        },
        {
            id:2,
            myName:"Banti",
            Age:18
        },
        {
            id:2,
            myName:"Aayush",
            Age:18
        }
    ]

    // const [myArray,setMyArray] = useState(data)

    // const clearArray = () => {      
    //     setMyArray([]);
    // }

    const [search,setSearch] = useState("");

    console.log(data);

    return (
        <div >
            <h3>Array in React js</h3>
            <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} />
            {/* {
             data.map((dat,index)=>{
                    return(
                        <h3 key={index}>{dat.myName}</h3>
                    )
                })
            } */}

            {
                data.filter((post)=>{
                    if(search==="")
                    {
                        return post
                    }
                    else if (post.myName.toLowerCase().includes(search.toLowerCase())) {
                        return post;
                      }
                }).map((post,index)=>{
                    return (
                        <h3 key={index}>{post.myName}</h3>
                    )
                })
            }
            {/* <button onClick={clearArray}>Clear</button> */}
        </div>
    )
}

export default Array;
