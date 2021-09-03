import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import './sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/cars" className="link">
                            <li className="sidebarListItem">
                                <LocalTaxiIcon className="sidebarIcon"/>
                                Car
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <PersonIcon className="sidebarIcon"/>
                            Driver
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcon"/>
                            Transactions
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/roles" className="link">
                            <li className="sidebarListItem">
                                <LocalTaxiIcon className="sidebarIcon"/>
                                Role
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <PersonIcon className="sidebarIcon"/>
                            User
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcon"/>
                            Transactions
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LocalTaxiIcon className="sidebarIcon"/>
                            Car
                        </li>
                        <li className="sidebarListItem">
                            <PersonIcon className="sidebarIcon"/>
                            Driver
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcon"/>
                            Transactions
                        </li>
                    </ul>
                </div>
                
            </div>
            
        </div>
        
    )
}