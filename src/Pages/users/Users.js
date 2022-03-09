import React, {useContext, useEffect, useMemo, useState} from 'react';
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import MyModal from "../../components/MyModal/MyModal";
import UserSortAndSearch from "./UserSortAndSearch";
import MyButton from "../../components/MyButton/MyButton";
import Crud from "../../services/crud.service";
import AuthContext from "../../context/context";
import {setAllUsers} from "../../reducer/reducer";


const Users = () => {

    const userCrud = new Crud('users');
    const [loading, setLoading] = useState(false);
    const [sorter, setSorter] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
    const {state, dispatch} = useContext(AuthContext)

    useEffect(() => {

        fetchAllUsers();

    }, [])

    const fetchAllUsers = () => {
        setLoading(true);
        userCrud.getAll().then((res) => {
            dispatch(setAllUsers(res.data));
            setLoading(loading);
        })
    }

    const sortedUsers = useMemo(() => {
        if (sorter === 2) {
            return [...state.users].sort((a, b) => b.id - a.id)
        } else if(sorter === 1){
            return [...state.users].sort((a, b) => a.id - b.id)
        } return [...state.users]

    }, [sorter, state.users])


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
            {state.users.length && <UserList users={state.users} deleteUser={confirmDeleteUser} sortedAndSearchedUsers={sortedAndSearchedUsers}/>}
            <MyButton
                action={() => setShowModal(true)}
            >Add User
            </MyButton>
            <MyModal visible={showModal}
                     onCancel={()=>{onCancel()}}
                     closeButtonShow>
                <UserAdd users = {state.users} setUsers = {dispatch} onCancel={()=>onCancel()}/>
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