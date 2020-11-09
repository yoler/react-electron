import React, { useState, useEffect, useRef } from 'react';
import ts from 'typescript';
import './App.css';

function App() {
    const [htmlV, setHtmlV] = useState('')
    const onInput = (e: any) => {
        setHtmlV(e.target.innerText)
    }
    // ts
    const htmlRef = useRef<HTMLDivElement>(null)  

    // js
    // const htmlRef = useRef(null)


    useEffect(() => {
        htmlRef!.current!.innerHTML = htmlV
    }, [htmlV])
    
    return (
        <div className="App">
            <User name='aaa' age={2522}>
                <div>aaaaaa</div>
            </User>
            <div className="edit" contentEditable onInput={onInput}></div>
            <div ref={htmlRef}>

            </div>
        </div>
    );
}


type UserInfo = {
    name: String,
    age: number
}

const User:React.FC<UserInfo> = ({ name, age, children }) => {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            {children}
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>加</button>
        </div>
    )
}

export default App;
