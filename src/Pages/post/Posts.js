import React, {useEffect, useMemo, useState} from 'react';
import MyModal from "../../components/MyModal/MyModal";
import Crud from "../../services/crud.service";
import PostAdd from "./PostAdd";
import MyButton from "../../components/MyButton/MyButton";
import Spinner from "../../components/Spinner";

const Posts = () => {

    const postsCrud = new Crud('posts');
    const [showModal, setShowModal] = useState(false);
    const [showPostModal, setShowPostModal] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [sorter, setSorter] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [usersPosts, setUsersPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        fetchAllPosts();

    }, [])

     const fetchAllPosts = () => {
        setLoading(true);
        postsCrud.get('?_page=1&_limit=15').then((res) => {
            setUsersPosts(res.data);
            setLoading(loading);
        })
    }

    const confirmDeletePost = (post) =>{
        setCurrentPost(post);
        setShowModal(true)
    }

    const editPost = (post) => {
        postsCrud.update(post.id).then((res) => {
        })
    }

    const onCancel = () =>{
        setShowModal(false)
        setShowPostModal(false)
    }

    const deletePost = () => {
        postsCrud.delete(currentPost.id).then((res) => {
            setUsersPosts(usersPosts.filter((post) => post.id !== currentPost.id))
            setShowModal(false)
        }).catch((err) => alert(err))

    }

    const onSearch = (e) => {
        setSearchQuery(e.target.value)
    }

    const onSort = (e) => {
        setSorter(+e.target.value)
    }

    const sortedPosts = useMemo(() => {
        if (sorter) {
            return [...usersPosts].sort((a, b) => b.id - a.id)
        }
        return usersPosts
    }, [sorter, usersPosts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    return (
        <div className="container">

            <div className="input-group mt-3">
                <span className="input-group-text" id="basic-addon1">Search</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search post"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={onSearch}
                />
            </div>
            <select className="form-select mt-3 mb-4"
                    aria-label="Default select example"
                    onChange={onSort}
            >
                <option defaultValue value="0">from Min to Max</option>
                <option value="1">from Max to Min</option>
            </select>
            <MyButton
                action={() => setShowPostModal(true)}
            > + Add New Post
            </MyButton>
            { loading ? <Spinner/> : <div className="row">
                {sortedAndSearchedPosts.length
                    ?
                    sortedAndSearchedPosts.map((post) =>
                    <div className="col-sm-6 mt-3" key={post.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{post.id}. {post.title}</h5>
                                <p className="card-text">{post.body}</p>
                                <button onClick={() => confirmDeletePost(post)} className="btn btn-primary">Delete</button>
                                <button  onClick={() => editPost(post)} className="btn btn-primary m-4">Edit</button>
                            </div>
                        </div>
                    </div>
                )
                    :
                    <h3 className="mt-4">Post not found</h3>}
            </div>}

            <MyModal
                visible={showModal}
                title={"Delete User"}
                closeButtonShow
                saveButtonShow
                onCancel = {() => setShowModal(false)}
                onConfirm={()=> deletePost()}
            >
                {"Do you really want to delete it?"}
            </MyModal>
            <MyModal visible={showPostModal}
                     onCancel={onCancel}
                     closeButtonShow>
                <PostAdd usersPosts = {usersPosts}
                         setUsersPosts = {setUsersPosts}
                         onCancel={onCancel}
                         />
            </MyModal>
        </div>
    );
};

export default Posts;