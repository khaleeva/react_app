import MyButton from "./MyButton/MyButton";
import {useState} from "react";
import ToggleButton from "./MyButton/ToggleButton";
import Counter from "./Counter";

const App = () =>{
    const [buttonText, setButtonText] = useState('Click me please!')
    const [toggle, setToggle] = useState(true);


  return (
    <div className="App">
        <MyButton changeText={setButtonText}>{buttonText}</MyButton>
        <ToggleButton
            toggle={toggle}
            setToggle={setToggle}
        >{toggle ? "One" : "Two"}</ToggleButton>

        <Counter/>
    </div>
  );
}

export default App;
