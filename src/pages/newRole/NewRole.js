import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './newRole.css'

export default function NewRole(){

    let history = useHistory()
    const [name,setName] = useState("")
    const [level,setLevel] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newRole = { name, level}
       console.log(newRole)
       fetch('http://localhost:8080/api/v1/roles',{
           method: 'POST',
           headers: {'Content-type': 'application/json'},
           body: JSON.stringify(newRole)
       })
       .then(r => r.json())
       .then(() => {
           console.log('role added')
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

    return(
        <div className="newRole">
            <h1 className="newRoleTitle">New Role</h1>
            <form className="newRoleForm" onSubmit={handleSubmit}>
                <div className="newRoleItem">
                    <label>Name</label>
                    <input type="text" placeholder="Admin" required value={name} onChange={handleNameChange}/>
                </div>
                <div className="newRoleItem">
                    <label>Level</label>
                    <input type="number" placeholder="Between 1 and 10" min="1" max="10" required value={level} onChange={handleLevelChange}/>
                </div>
                <div className="newRoleItem">
                <button className="newRoleAddButton">Save</button>
                </div>
                
            </form>
        </div>
    )
}