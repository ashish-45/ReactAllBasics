import React, { useState, useEffect } from 'react'

const useEffects = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Chats(${count})`;
    })

    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>{count}</h2>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : count)}>Decrement</button>

        </div>
    )
}

export default useEffects;
