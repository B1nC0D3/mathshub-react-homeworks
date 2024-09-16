import React, {useState} from "react";
import './ProfileCounter.css'

function ProfileCounter() {
    const [curCount, setCount] = useState(0)

    const changeCounter = (e) => {
        setCount(curCount + +e.target.value)
    }

    return (
        <div className="profile__counter_wrapper">
            <div className="profile__counter_text_wrapper">
                <span>Счетчик</span>
            </div>
            <div className="profile__counter_buttons_wrapper">
                <button type='button' value={-1} onClick={changeCounter}>-</button>
                <span id="counter">{curCount}</span>
                <button type='button' value={1} onClick={changeCounter}>+</button>
            </div>
        </div>
    )
}


export default ProfileCounter