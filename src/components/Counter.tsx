import React, {useState} from 'react'

const Counter:React.FC = (props) => {
    const [count, setCount] = useState(0)

    return <>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
} 

export default Counter