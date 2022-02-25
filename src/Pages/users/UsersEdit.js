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


    return (
        <div>
            ghfhffjfkuhlihlj
        </div>
    );
};

export default UsersEdit;