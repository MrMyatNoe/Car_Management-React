import { React } from 'react';
import './topbar.css';

export default function Topbar() {
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                <img src="https://image.freepik.com/free-vector/red-sport-car-logo-vector-icon-negative-space-style_126523-730.jpg" alt="" className="topbarAvatar"/>
                </div>
                <div className="topRight">
                <img src="https://images.pexels.com/photos/6934325/pexels-photo-6934325.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="topbarAvatar"/>
                    <div className="topbarIconContainer">
                        <span className="topIconBadge">Profile</span>
                    </div>   
                    <div className="dropdown">
                        <button className="dropbtn">
                            dropdown
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Profile</a>
                            <a href="#">Update Password</a>
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}