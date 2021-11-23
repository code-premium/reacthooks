import React, { useState } from 'react'

function HFArrays() {

    const [items, setItems] = useState([])

    const remove = (id) => {
        let updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        //  setItems(items.filter(item =>item.id !== id));
    }

    const update =(id)=>{
       let number = Math.random();
       let updatedItems = items.map(item => item.id === id ? {id:item.id, value: number}: item);
       setItems(updatedItems);
    }

    const add = () => {

        let number = Math.random();
        let item = {
            id: number,
            value: number.toString()
        }
        setItems([item, ...items]);
    }

    return (
        <div>
            <input type="button" value="add" onClick={add} />
            <br />
            {items.map((item) =>
                <div>
                    <li key={item.id}>{item.value}</li>
                    <input type="button" value="update" onClick={() => update(item.id)} />
                    <input type="button" value="remove" onClick={() => remove(item.id)} />
                </div>)}
        </div>
    )
}

export default HFArrays
