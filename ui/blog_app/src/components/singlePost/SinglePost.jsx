import React, { useEffect, useState } from 'react'
import "../singlePost/SinglePost.css"
import postImg from "../../assets/natureBlogPost.jpg"
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get("http://localhost:5000/api/posts/" + path);
            setPost(response.data)
        }
        getPost();
    }, [])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo &&
                    <img src={postImg} alt="" className="singlePostImg" />
                }
                <div className="singlePostTitleBox">
                    <h1 className="singlePostTitle">{post.photo}</h1>
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash"></i>
                    </div>
                </div>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>{post.username}</b></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">{post.desc}</p>
            </div>
        </div>
    )
}

export default SinglePost