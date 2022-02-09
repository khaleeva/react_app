import UserList from "./UserList";
import {users} from "../users";
import UserAdd from "./UserAdd";

const App = () =>{
    // const [buttonText, setButtonText] = useState('Click me please!')
    // const [toggle, setToggle] = useState(true);
    //  const changeText = () =>{
    //      setButtonText("new text")
    //  }

  return (
    <div className="App">
        {/*<MyButton action={changeText}>{buttonText}</MyButton>*/}
        {/*<ToggleButton*/}
        {/*    toggle={toggle}*/}
        {/*    setToggle={setToggle}*/}
        {/*>{toggle ? "One" : "Two"}</ToggleButton>*/}

        {/*<Counter/>*/}
        {/*<MyClassButton/>*/}

        <UserList users={users}/>
        <UserAdd/>
    </div>
  );
}

export default App;
