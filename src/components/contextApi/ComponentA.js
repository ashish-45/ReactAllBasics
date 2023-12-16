import React, { createContext } from 'react';
import ComponentB from './ComponentB';

const data = createContext();

// context api allow you to easily access data at different level of components  without passing props every level

const ComponentA = () => {
    return (
            <data.Provider value={"Ashish"}>
                <ComponentB/>
            </data.Provider>   
    )
}

export default ComponentA;
export {data};
