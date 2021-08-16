import './role.css';
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function Role(){

    const [data, setData] = useState([]);
    const onHandleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
    useEffect(() =>{
      const fetchData = async () => {
          const response = await fetch("http://localhost:8080/api/v1/roles")
          const data = await response.json()
          console.log(data)
          setData(data)
      }
      fetchData()
    },[] )
    // const fetchData = () => {
    //   return fetch("http://localhost:8080/api/v1/roles")
    //         .then((response) => response.json())
    //         .then((data) => console.log(data));}

const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'name',
      headerName: 'Role Name',
      width: 150,
      editable: true,
    },
    {
      field: 'level',
      headerName: 'Level',
      width: 150,
      editable: true,
    },
    {
        field: 'Action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
            return(
                <>
                    <Link to={"role/"+params.row.id}>
                        <button className="roleEdit">Edit</button>
                    </Link>
                    <DeleteIcon className="roleDelete" onClick={()=>onHandleDelete(params.row.id)}/>
                </>
            )
        }

    }
  ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}