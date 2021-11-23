import React, { useState, useEffect} from 'react'

function HFCounter() {

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(18);

    const incrementar = () => {
        setCount(count + 1);
    }

    const incrementarAge = () => {
        setAge(age + 1);
    }

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`;
        console.log(document.title);
    },[count,age]);

    return (
        <div>
            <button onClick={incrementar}>Contador hooks: {count}</button>
            <button onClick={incrementarAge}>Contador age: {age}</button>
        </div>
    )
}

export default HFCounter
