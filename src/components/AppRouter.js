import React from 'react';
import {Route, Routes} from "react-router-dom";
import Users from "../Pages/users/Users";
import Posts from "../Pages/post/Posts";
import UsersEdit from "../Pages/users/UsersEdit";
import NotFound from "../Pages/NotFound";



const AppRouter = () => {
  return (
    <Routes>
        <Route path = '/' element={<Users/>}/>
        <Route path = '/users' element={<Users/>}/>
        <Route path = '/users/:id' element={<UsersEdit/>}/>
        <Route path = '/posts' element={<Posts/>}/>
        <Route path = '*' element={<NotFound/>}/>
    </Routes>
  )
};

export default AppRouter;