import React from 'react'
import "./Write.css";
import blogImg from "../../assets/natureBlogPost.jpg"

const Write = () => {
  return (
    <div className="write">
        <img className="blogImg" src={blogImg} alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" name="fileInput" id="fileInput" className="fileInputField"/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write