import './role.css';
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { rows } from '../../dummyData';

export default function Role(){

    const [data, setData] = useState(rows);
const onHandleDelete = (id) => {
    console.log(id)
    setData(data.filter((item) => item.id !== id));
  };

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
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