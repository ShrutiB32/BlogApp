import React from 'react'
import "../post/Post.css"
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  console.log(post)
  return (
    <div className="post">
      {post.photo && (<img className="postImg" src={post.photo} alt="" />)}

      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map((category) =>
              <span className="postCat">{category.name}</span>
            )
          }
        </div>
        <Link to={`/post/${post._id}`} className="link">

          <span className="postTitle">{post?.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post?.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post?.desc}
      </p>
    </div>
  )
}

export default Post