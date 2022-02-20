import React, {useState} from 'react';
import UserList from "./UserList";
import UserAdd from "./UserAdd";


const Users = () => {


    const [users, setUsers] = useState([
        {
            id:1,
            name: 'Franko',
            age: 32,
            country: "USA"
        },
        {
            id:2,
            name: 'Mikolo',
            age: 43,
            country: "Italy"
        },
        {
            id:3,
            name: 'Petro',
            age: 20,
            country: "Russia"
        },

    ]);

    const deleteUser = (id) => {
        const confirm = window.confirm("Do you really want to delete it?")
        if (confirm) {
            setUsers(users.filter((user) => user.id !== id))
        }
    }
    return (
        <div className='container'>
            <UserList users={users} deleteUser={deleteUser}/>
            <UserAdd users = {users} setUsers = {setUsers}/>
        </div>
    );
};

export default Users;