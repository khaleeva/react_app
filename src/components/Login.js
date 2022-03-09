import React, {useContext, useState} from 'react';
import AuthContext from "../context/context";
import http from "../http";
import {LOGIN} from "../reducer/reducer";

const Login = () => {

    // const { setAuth } = useContext(AuthContext);

    const { state, dispatch } = useContext(AuthContext);

    const [values, setValues] = useState({username:"", password: ""})

    const onChange = (e) =>{
        e.preventDefault();
        const field = e.target.id;
        setValues({...values, [field]:e.target.value})
    }

    console.log(values)


    const login = (e) => {
        e.preventDefault();
        http.post('https://fakestoreapi.com/auth/login', values).then((res) =>{
            // setAuth(true);
            dispatch({type: LOGIN , data:res.data.token})
            console.log(res);
            window.localStorage.setItem("token", res.data.token)

        }).catch((e) => console.log(e))
    }

    return (
        <form className="container-md col-4 my-5">
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    onChange={onChange}
                />

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={onChange}
                />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    // onChange={onChange}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button className="btn btn-primary" onClick={login}>Submit</button>
        </form>
);
};

export default Login;