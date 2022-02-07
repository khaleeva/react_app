 import React from 'react';

const MyButton = ({children, changeText}) => {

    // const [state, setState] = useState('Text');

    return (
        // <button onClick={()=> state === "Text" ? setState('New text') : setState('Text')}>
        //     {state}
        // </button>

        <button onClick={() => changeText('Thank you!')}>{children}</button>
    );
};

export default MyButton;