import React, {useEffect, useState} from 'react';
import Crud from "../../services/crud.service";
import {useParams} from "react-router-dom";

const PostEdit = () => {



    const postCrud = new Crud ('posts');
    const [post, setPost] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getPost()
    }, []);

    const getPost = () => {
        postCrud.get(`${id}`).then ((res) => {
            // setPost(res.data)

        })
    }

    console.log(post)

    const onChange = (e) =>{

        const field = e.target.id;
        setPost({...post, [field]:e.target.value})
    }

    const savePost = (e) =>{
        e.preventDefault();
        postCrud.update(post.id, post).then((res) =>
            setPost(res.data)
        )
    }

    return (

            <form className="container-md col-4 my-5" onSubmit={savePost}>
                {post && Object.keys(post).map((field, id) => {
                    if(field === "id" || field === "company" || field === "address") return;

                    return (
                        <div className="mb-3" key={id}>
                            <label htmlFor={field} className="form-label">{field}</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                value={post[field]}
                                id={field}
                                onChange={onChange}
                            />

                        </div> )})}
                <button className="btn btn-primary" >Save</button>
            </form>

    );

};
//
export default PostEdit;