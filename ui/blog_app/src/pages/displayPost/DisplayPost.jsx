import React from 'react'
import "../displayPost/DisplayPost.css"
import Sidebar from '../../components/sideBar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'

const DisplayPost = () => {
  return (
    <div className="displayPost">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default DisplayPost