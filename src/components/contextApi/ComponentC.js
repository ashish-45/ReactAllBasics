import React,{useContext} from 'react';
import {data} from './ComponentA';

const ComponentC = () => {
    const context = useContext(data);
    return (
        <div>
            <h1>Hello {context}</h1>
        </div>
    )
}

export default ComponentC
