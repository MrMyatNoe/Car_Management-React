import './role.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import BuildIcon from '@material-ui/icons/Build';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Role(){

  const [role, setRole] = useState([])
  const {roleId} = useParams();
  
  let history = useHistory()
  const [name,setName] = useState("")
  const [level,setLevel] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = roleId;
    const updateRole = {id, name, level}
   console.log(updateRole)
   fetch('http://localhost:8080/api/v1/roles',{
       method: 'PUT',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(updateRole)
   })
   .then(r => r.json())
   .then(() => {
       console.log('role updated')
       history.push('/roles')
   })
}

const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
}

const handleLevelChange = (e) => {
    e.preventDefault()
    setLevel(e.target.value)
}

  useEffect(
        () => {
            const fetchRole = async () =>{
                const response = await fetch(`http://localhost:8080/api/v1/roles/${roleId}`)
                const data = await response.json();
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
          <button className="roleCreateButton">Create</button>
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
          <form className="roleUpdateForm" onSubmit={handleSubmit}>
            <div className="roleUpdateLeft">
              <div className="roleUpdateItem">
                <label>Role Name</label>
                <input
                  type="text"
                  placeholder="Admin"
                  className="roleUpdateInput"
                  required
                  onChange={handleNameChange}/>
              </div>

              <div className="roleUpdateItem">
                <label>Level</label>
                <input
                  type="number"
                  placeholder="Between 1 and 10"
                  className="roleUpdateInput"
                  min="1"
                  max="10"
                  required
                  onChange={handleLevelChange}/>
              </div>
              <div className="roleUpdateItem">
                <button className="roleUpdateButton">Update</button>
              </div>
            </div>
            <div className="roleUpdateRight"></div>
            
          </form>
        </div>
      </div>
    </div>
  )
}