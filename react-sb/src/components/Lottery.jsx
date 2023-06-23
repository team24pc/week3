import { useState } from "react"

export const Lottery = (props) => {
    const [random, setRandom] = useState(0);
    
    function clickHandler() {
        // eslint-disable-next-line react/prop-types
        setRandom(Math.ceil(Math.random() * (props.max - props.min) + props.min))
    }
    return (
        <>  
            <h1>랜덤넘버</h1>
            <button onClick={clickHandler}>Random Number</button>
            <p>{random}</p>
        </>
    )
}