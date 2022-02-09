 import React from 'react';
 import button from "./MyButton.css"

const MyButton = ({children, action}) => {



    // const [state, setState] = useState('Text');

    return (
        // <button onClick={()=> state === "Text" ? setState('New text') : setState('Text')}>
        //     {state}
        // </button>

        <button className={"button"}  onClick={() => action()}>{children}</button>
    );
};

export default MyButton;