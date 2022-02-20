import React from 'react';
import MyButton from "../../components/MyButton/MyButton";


const UserList = ({users, deleteUser}) => {



    return (
        <table className="table table-info">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Country</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {users.map ((user, index) =>
            <tr key={index}>
                <th scope="row" >{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.country}</td>
                <td><MyButton action={() => deleteUser(user.id)}>delete</MyButton></td>
            </tr>
                )}
            </tbody>
        </table>
    )

};

export default UserList;





// return users.map((user, index) =>
//     <div className={'userList'} key={index}>
//         <div className={'name'}><span>Name:</span> {user.name}</div>
//         <div className={'age'}><span>Age:</span> {user.age}</div>
//         <div className={'country'}><span>Country:</span> {user.country}</div>
//     </div>
// )