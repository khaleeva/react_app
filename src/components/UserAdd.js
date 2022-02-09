import React, {useState} from 'react';

const UserAdd = ({users}) => {
    const [user, setUser] = useState({});


    const onChange = (e) =>{
        const field = e.target.id;
        setUser({...user, [field]:e.target.value})
    }

    const addNewUser = () => {
        users.push(user);
        console.log(users)
    }

    console.log(user);
    const values = {
        name: 'text',
        age: 'number',
        country: 'text'
    }




    return (
        <>
            {Object.keys(values).map((value, index) =>
                <input
                    id = {value}
                    key = {index}
                    type = {values[value]}
                    placeholder={`Input your ${value}`}
                    onChange={onChange}
                />
            )}
            <button onClick={addNewUser}>Add new user</button>
        </>
    );
};

export default UserAdd;