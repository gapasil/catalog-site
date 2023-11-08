import React, { useState } from "react";
import image from "../../images/search-button.png"
import style from "./input.module.css"

function Input({setState,styles}) {
    const [inputValue, setInputValue] = useState("");
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    function checkForEnter(e) {
        if (e.keyCode === 13) {
            setState(inputValue)
        }
    }

    return (
        <div className={style.container} style={styles?{...styles}:undefined}>
            <button onClick={()=>{
                setState(inputValue)}
            }>
                <img src={image}/>
            </button>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={checkForEnter}
                placeholder="tag, id, name, category, subcategory..."
            />
        </div>
    );
}

export default Input;