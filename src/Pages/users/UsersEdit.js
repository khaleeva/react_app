import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Crud from "../../services/crud.service";

const UsersEdit = () => {


    const userCrud = new Crud ('users');
    const [user, setUser] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getUser()
    }, []);

    const getUser = () => {
        userCrud.get(`${id}`).then ((res) => {
            setUser(res.data)
        })
    }

    // console.log(user)

    const onChange = (e) =>{

        const field = e.target.id;
        setUser({...user, [field]:e.target.value})
    }

    const saveUser = (e) =>{
        e.preventDefault();
        userCrud.update(user.id, user).then((res) =>
            setUser(res.data)
        )
    }


    return (
        <form className="container-md col-4 my-5" onSubmit={saveUser}>
            {user && Object.keys(user).map((field, id) => {
                if(field === "id" || field === "company" || field === "address") return;

                return (
                    <div className="mb-3" key={id}>
                <label htmlFor={field} className="form-label">{field}</label>
                <input
                    type="text"
                    className="form-control"
                    required
                    value={user[field]}
                    id={field}
                    onChange={onChange}
                />

            </div> )})}
            <button className="btn btn-primary" >Save</button>
        </form>
    );
};

export default UsersEdit;