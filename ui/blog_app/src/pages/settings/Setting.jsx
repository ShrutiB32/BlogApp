import React from 'react'
import "./Setting.css"
import Sidebar from '../../components/sideBar/Sidebar'

const Setting = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img src="" alt="" />
                        <label htmlFor="fileInput">
                            <i class="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="Shruti" />

                    <label>Email</label>
                    <input type="email" placeholder="shruti@gmail.com" />

                    <label>Password</label>
                    <input type="password" />

                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Setting