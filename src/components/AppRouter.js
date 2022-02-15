import React from 'react';
import {Route, Routes} from "react-router-dom";
import Users from "../Pages/users/Users";
import Posts from "../Pages/post/Posts";




const AppRouter = () => {
  return (
    <Routes>
        <Route path = '/' element={<Users/>}/>
        <Route path = '/users' element={<Users/>}/>
        <Route path = '/posts' element={<Posts/>}/>

    </Routes>
  )
};

export default AppRouter;