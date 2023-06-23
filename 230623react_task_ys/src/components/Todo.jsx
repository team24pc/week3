import { useState } from "react"

export const Todo = () => {
    const [memos, setMemos] = useState([]);
    const [newMemo, setNewMemo] = useState('');

    function postMemo(e) {
        e.preventDefault()
        const newId = memos.length + 1;
        setMemos([...memos, {id: newId, memo: newMemo}])
    }
    const valueOnChange = (e) => {
        setNewMemo(e.target.value)
    }

    return (
        <>
            <h1>투두</h1>
            <form onSubmit={postMemo}>
                <input value={newMemo} onChange={valueOnChange} placeholder="할 일" type="text"/>
                <input type="submit" />
            </form>
            <div>
                {memos?.map((v) => {
                    return (<p key={v.id}>{`${v.id} : ${v.memo}`}</p>)
                })}
            </div>
        </>
    )
}