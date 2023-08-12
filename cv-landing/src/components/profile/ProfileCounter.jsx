import React, { useState } from "react";


function ProfileCounter() {
    const [curCount, setCount] = useState(0)

    const changeCounter = (e) => {
        setCount(curCount + +e.target.value)
    }

    return (
        <div>
            <span>Счетчик: </span>
            <button type='button' value={-1} onClick={changeCounter}>-</button>
            <span id="counter">{curCount}</span>
            <button type='button' value={1} onClick={changeCounter}>+</button>
        </div>
    )
}


export default ProfileCounter