import React, {useMemo, useState} from 'react';
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import MyModal from "../../components/MyModal/MyModal";
import UserSortAndSearch from "./UserSortAndSearch";
import MyButton from "../../components/MyButton/MyButton";


const Users = () => {

    const [sorter, setSorter] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
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

    const sortedUsers = useMemo(() => {
        if (sorter === 2) {
            return [...users].sort((a, b) => b.age - a.age)
        } else if(sorter === 1){
            return [...users].sort((a, b) => a.age - b.age)
        } return [...users]

    }, [sorter, users])


    const sortedAndSearchedUsers = useMemo(() => {
        return sortedUsers.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedUsers])

    const onCancel = () =>{
       setShowModal(false)
    }

    const confirmDeleteUser = (user) =>{
        setCurrentUser(user);
        setConfirmModal(true)
    }

    const deleteUser = () => {
        setUsers(users.filter((user) => user.id !== currentUser.id))
        setConfirmModal(false)
    }

    return (
        <div className='container'>
            <UserSortAndSearch setSorter={setSorter} setSearchQuery={setSearchQuery}/>
            <UserList users={users} deleteUser={confirmDeleteUser} sortedAndSearchedUsers={sortedAndSearchedUsers}/>
            <MyButton
                action={() => setShowModal(true)}
            >Add User
            </MyButton>
            <MyModal visible={showModal}
                     onCancel={()=>{onCancel()}}
                     closeButtonShow>
                <UserAdd users = {users} setUsers = {setUsers} onCancel={()=>onCancel()}/>
            </MyModal>
            <MyModal
                visible={confirmModal}
                title={"Delete User"}
                closeButtonShow
                saveButtonShow
                onCancel={()=>{onCancel()}}
                onConfirm={()=> deleteUser()}
            >
                {"Do you really want to delete it?"}
            </MyModal>

        </div>
    );
};

export default Users;