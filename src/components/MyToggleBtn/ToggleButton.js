import React from 'react';
import button from './toggleBtn.css'

const ToggleButton = ({toggle, setToggle, children}) => {
    return (
        <button
            className={toggle ? "button-green" : "button-red"}
            onClick={()=>setToggle(!toggle)}
        >   {children}
        </button>
    );
};

export default ToggleButton;