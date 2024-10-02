import React from 'react'
import "../Posts/Posts.css";
import Post from '../post/Post';

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => <Post post={post} key={post._id}/>)
      }
    </div>
  )
}

export default Posts