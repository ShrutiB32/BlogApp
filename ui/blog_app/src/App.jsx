import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { useState } from "react"
import './App.css'
import SinglePost from './components/singlePost/SinglePost'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/home'
import Login from './pages/login/Login'
import Register from './pages/register/register'
import Setting from './pages/settings/setting'
import Write from './pages/write/Write'

const App = () => {
  const [user, setUser] = useState(false);
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path="/register" element= {user ? <Home/> : <Register />}>
          {/* {user ? <Home/> : <Register />} */}
        </Route>
        <Route path="/login" element={user ? <Home/> : <Login />}>
          {/* {user ? <Home/> : <Login />} */}
        </Route>
        <Route path="/write" element={user ? <Write/> : <Register />}>
          {/* {user ? <Write/> : <Register />} */}
        </Route>
        <Route path="/settings" element={user ? <Setting />: <Register />}>
          {/* {user ? <Setting />: <Register />} */}
        </Route>
        <Route path="/post/:postId" element = {<SinglePost />}>
          {/* <SinglePost /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
