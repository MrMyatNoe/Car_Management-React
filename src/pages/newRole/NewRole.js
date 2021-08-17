import './newRole.css'

export default function NewRole(){
    return(
        <div className="newRole">
            <h1 className="newRoleTitle">New Role</h1>
            <form className="newRoleForm">
                <div className="newRoleItem">
                    <label>Name</label>
                    <input type="text" placeholder="Admin"/>
                </div>
                <div className="newRoleItem">
                    <label>Level</label>
                    <input type="number" placeholder="1" min="1" max="10"/>
                </div>
                <div className="newRoleItem">
                <button className="newRoleAddButton">Save</button>
                </div>
                
            </form>
        </div>
    )
}