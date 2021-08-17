import './role.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import BuildIcon from '@material-ui/icons/Build';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Role(){

  const [role, setRole] = useState([])
  const {roleId} = useParams();

  console.log(roleId)
  useEffect(
        () => {
            const fetchRole = async () =>{
                const response = await fetch(`http://localhost:8080/api/v1/roles/${roleId}`)
                const data = await response.json();
                console.log(data)
                setRole(data);
            };
            fetchRole();
        }, [roleId]
    );
  

  return(
    <div className="role">
      <div className="roleTitleContainer">
        <h1 className="roleTitle">Edit User</h1>
        <Link to="/newRole">
          <button className="roleAddButton">Create</button>
        </Link>
      </div>
      <div className="roleContainer">
        <div className="roleShow">
          <div className="roleShowBottom">
            <span className="roleShowTitle">Role Details</span>
            <div className="roleShowInfo">
              <PermIdentityIcon className="roleShowIcon"/>
              <span className="roleShowInfoTitle">{role.name}</span>
            </div>

            <div className="roleShowInfo">
              <BuildIcon className="roleShowIcon"/>
              <span className="roleShowInfoTitle">{role.level}</span>
            </div>
          </div>
        </div>
        <div className="roleUpdate">
          <span className="roleUpdateTitle">Edit</span>
          <form className="roleUpdateForm">
            <div className="roleUpdateLeft">
              <div className="roleUpdateItem">
                <label>Role Name</label>
                <input
                  type="text"
                  placeholder="Admin or something"
                  className="roleUpdateInput"/>
              </div>

              <div className="roleUpdateItem">
                <label>Level</label>
                <input
                  type="number"
                  placeholder="Admin or something"
                  className="roleUpdateInput"
                  min="1"
                  max="10"/>
              </div>
            </div>
            <div className="roleUpdateRight"></div>
          </form>
        </div>
      </div>
    </div>
  )
}