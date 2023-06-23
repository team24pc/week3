import { useState } from "react"

export const Slide = () => {
    let imgs = [
        {
            id: 1,
            img: <p style={{background: 'red' ,width: '200px', height: '100px'}}></p>
        },
        {
            id: 2,
            img: <p style={{background: 'orange' ,width: '200px', height: '100px'}}></p>
        },
        {
            id: 3,
            img: <p style={{background: 'yellow' ,width: '200px', height: '100px'}}></p>
        },
        {
            id: 4,
            img: <p style={{background: 'green' ,width: '200px', height: '100px'}}></p>
        },
        {
            id: 5,
            img: <p style={{background: 'blue' ,width: '200px', height: '100px'}}></p>
        },
        {
            id: 6,
            img: <p style={{background: 'navy' ,width: '200px', height: '100px'}}></p>
        }
        ]
    const [key, setKey] = useState(1);
    
    const prevImg = () => {
        (key > 0) ? setKey(key - 1) : setKey(5)
        console.log(key)
    }
    const nextImg = () => {
        (key < 5) ? setKey(key + 1) : setKey(0)
        console.log(key)
    }

    return (
        <>
            <h1>slide</h1>
            {imgs[key].img}
            <button onClick={prevImg}>◀︎</button>
            <button onClick={nextImg}>▶︎</button>
        </>
    )
}