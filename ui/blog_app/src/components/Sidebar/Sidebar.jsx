import React,{useState, useEffect} from 'react'
import "../Sidebar/Sidebar.css"
import aboutMeImg from "../../assets/aboutMe.jpg"
import axios from 'axios';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const getCategory = async () => {
            const response = await axios.get("http://localhost:5000/api/categories");
            console.log(response.data);
            setCategories(response.data);
        }
        getCategory()
    },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img src={aboutMeImg} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati sint minima aliquam facilis corrupti consectetur, provident .
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {categories.map((category)=>
                    <li className="sidebarListItem" key={category._id}>{category.name}</li>
                )}
                
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar