import React from 'react';
import {Link, NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <NavLink className="btn btn-primary" to={'/'}>back to home</NavLink>
        </div>
    );
};

export default NotFound;