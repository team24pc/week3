/* eslint-disable react/prop-types */

import { useState } from "react"

const Counter = (props) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>카운터</h1>
            <p>how many? {count}</p>
            <button style={{background: props.color, fontSize: props.size}} onClick={() => setCount(count+1)}>Kcilc</button>
        </>
    )
}

export default Counter;