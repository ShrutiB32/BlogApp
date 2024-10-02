import React from 'react'
import "../header/Header.css"
import headerImg from "../../assets/headerImg.jpg"

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles"> 
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={headerImg} alt=""/>
    </div>
  )
}

export default Header