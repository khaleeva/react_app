import React, {useState} from 'react';
import MyButton from "../../components/MyButton/MyButton";
import Crud from "../../services/crud.service";


const PostAdd = ({usersPosts, setUsersPosts, onCancel}) => {

    const postsCrud = new Crud('posts');

    const onChange = (e) =>{
        e.preventDefault();
        const field = e.target.id;
        setValues({...values, [field]:e.target.value})
        console.log(setValues)
    }

    const addNewPost = () => {
        postsCrud.create(values).then((res) => {
            setUsersPosts([...usersPosts, values])
        })
        setValues({
            // id: '',
            title: '',
            body: '',
        })
        onCancel();
    }

    let countId = usersPosts.length; // для id


    const [values, setValues] = useState({
        title: '',
        body: '',
    })

    return (
        <div className='post-form'>
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

            <MyButton className={"adduserBtn"} action={addNewPost} >Add new post</MyButton>
        </div>
    );
};

export default PostAdd;