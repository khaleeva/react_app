import React from 'react';
import MyButton from "../../components/MyButton/MyButton";
import {Link} from "react-router-dom";

const UserList = ({deleteUser, sortedAndSearchedUsers, users}) => {
    console.log(sortedAndSearchedUsers)
    return (
        <table className="table table-info">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {sortedAndSearchedUsers.length
                ? sortedAndSearchedUsers.map ((user, id) =>
            <tr key={id}>
                <th scope="row" ><Link to={`/users/${user.id}`}>{user.id}</Link></th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
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



