import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';

import './carList.css'
import { DataGrid } from '@material-ui/data-grid';

export default function CarList(){

    const [car, setCar] = useState([])
    const onHandleDelete = (id) => {
        setCar(CarList.filter((item) => item.id !== id));
      };

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("http://localhost:8080/api/v1/cars")
            const data = await response.json()
            console.log(data)
            setCar(data)
        }
        fetchData()
    }, [])

    const columns = [
        {   field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'name',
            headerName: 'Car Name',
            width: 150,
            editable: false,
        },
        {
            field: 'carNo',
            headerName: 'Car Number',
            width: 200,
            editable: false,
        },
        {
            field: 'licenseDate',
            headerName: 'License Date',
            width: 150,
            editable: false,
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
    return(
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
        rows={car}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}