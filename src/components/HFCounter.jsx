import React, { useState } from 'react'

function HFCounter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Contador hooks: {count}</button>
        </div>
    )
}

export default HFCounter
