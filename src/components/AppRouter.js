import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Users from "../Pages/users/Users";
import Posts from "../Pages/post/Posts";
import UsersEdit from "../Pages/users/UsersEdit";
import NotFound from "../Pages/NotFound";
import AuthContext from "../context/context";
import Login from "./Login";

const AppRouter = () => {

    // const {auth} = useContext(AuthContext);
    const {state} = useContext(AuthContext);

    return (

        state.auth ?
            <Routes>
                <Route path='/' element={<Users/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/users/:id' element={<UsersEdit/>}/>
                <Route path='/posts' element={<Posts/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            :
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='*' element={<Login />}/>
            </Routes>
    )
};

export default AppRouter;