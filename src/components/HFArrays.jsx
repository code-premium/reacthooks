import React, { useState } from 'react'

function HFArrays() {

    const [items, setItems] = useState([])

    const add =()=>{

        let number = Math.random();
        let item ={
            id:number,
            value: number.toString()
        }

        //setItems([...items,item]);
        setItems([item, ...items]);

    }

    return (
        <div>
            <input type="button" value="add" onClick={add} />
            <br />
            {items.map((item) => <li key={item.id}>{item.value}</li>)}
        </div>
    )
}

export default HFArrays
