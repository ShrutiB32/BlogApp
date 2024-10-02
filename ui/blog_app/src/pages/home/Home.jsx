import React, {useEffect, useState}from 'react'
import "../home/Home.css"
import Header from '../../components/header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/sideBar/Sidebar'
import axios from "axios"
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts]= useState([]);
  const {search} = useLocation();


  useEffect(()=> {
    const fetchData = async() => {
      const response= await axios.get("http://localhost:5000/api/posts" + search)
      setPosts(response.data)
    }
    fetchData()
  },[search])
  return (
    <>
        <Header />
        <div className="home">
            <Posts posts={posts}/>
            <Sidebar />
        </div>
    </>
  )
}

export default Home