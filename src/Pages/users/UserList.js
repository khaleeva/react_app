import React from 'react';
import MyButton from "../../components/MyButton/MyButton";


const UserList = ({deleteUser, sortedAndSearchedUsers}) => {

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
            {sortedAndSearchedUsers.length
                ? sortedAndSearchedUsers.map ((user, index) =>
            <tr key={index}>
                <th scope="row" >{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.country}</td>
                <td><MyButton action={() => deleteUser(user)}>delete</MyButton></td>
            </tr>
                )
                :
                <h3 className="mt-4">User not found</h3>
            }
            </tbody>
        </table>
    )
};

export default UserList;



