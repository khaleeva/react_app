import React, {useState} from 'react';
import MyButton from "../../components/MyButton/MyButton";

const UserAdd = ({users, setUsers}) => {
    // const [user, setUser] = useState({});


    const onChange = (e) =>{
        e.preventDefault();
        const field = e.target.id;
        setValues({...values, [field]:e.target.value})
    }

    const addNewUser = () => {
        setUsers([...users, values])
        setValues({
            name: '',
            age: '',
            country: ''
        })
    }

    const [values, setValues] = useState({
        name: '',
        age: '',
        country: ''
    })

    return (
        <>
            {Object.keys(values).map((value, index) => {
                if (value === 'age') {
                    return <input
                        className={'user_input'}
                        id={value}
                        value={values[value]}
                        key={index}
                        type = 'number'
                        placeholder={`Input your ${value}`}
                        onChange={onChange}
                    />
                }
                return <input
                    className={'user_input'}
                    id={value}
                    value={values[value]}
                    key={index}
                    placeholder={`Input your ${value}`}
                    onChange={onChange}
                />
            })
            }


            <MyButton className={"adduserBtn"} action={addNewUser}>Add new user</MyButton>
        </>
    );
};

export default UserAdd;