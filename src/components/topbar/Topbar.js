import { React } from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './topbar.css';

export default function Topbar() {
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                </div>
                <div className="topRight">
                <img src="https://images.pexels.com/photos/6934325/pexels-photo-6934325.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="topbarAvatar"/>
                    <div className="topbarIconContainer">
                        <span className="topIconBadge">Profile</span>
                    </div>  
                    <div className="topbarIconContainer">
                        <span className="topIconBadge">Profile</span>
                    </div>  
                    <div className="topbarIconContainer">
                        <span className="topIconBadge">Update password</span>
                    </div>  
                    <div className="topbarIconContainer">
                        <span className="topIconBadge">Logout</span>
                    </div>  
                </div>
            </div>
        </div>
    )
}