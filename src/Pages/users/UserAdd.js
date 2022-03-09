import React, {useState} from 'react';
import MyButton from "../../components/MyButton/MyButton";
import Crud from "../../services/crud.service";


const UserAdd = ({users, setUsers, onCancel}) => {

    const userCrud = new Crud('users');
    const [values, setValues] = useState({
        name: '',
        username: '',
        email:'',
        phone:'',
        website:''
    })

    const onChange = (e) =>{
        e.preventDefault();
        const field = e.target.id;
        setValues({...values, [field]:e.target.value})
    }


    const addNewUser = () => {
        userCrud.create(values).then((res) => {
            setUsers([...users, values])
        })
        setValues({
            name: '',
            username: '',
            email:'',
            phone:'',
            website:''
        })
        onCancel();
    }

    return (
        <div className='user-form'>
            {Object.keys(values).map((value, index) => {

                return <input
                    className={'user_input'}
                    id={value}
                    value={values[value]}
                    key={index}
                    placeholder={`Input your ${value}`}
                    onChange={onChange}
                />
            })
            }

            <MyButton className={"adduserBtn"} action={addNewUser} >Add new user</MyButton>
        </div>
    );
};

export default UserAdd;