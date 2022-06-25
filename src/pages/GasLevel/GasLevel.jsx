import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';


const GasLevel = () => {
    const columns = [
        {headerName:"ID",field:"_id",width: 300},
        {headerName:"Gas Level" ,field:"gasLevel" ,width: 300},
        {headerName:"Date and Time",field:"date",width:300}
      ]
      const [data,setData] = useState([]);
      useEffect(() => {
        axios.get("http://localhost:8080/record")
        .then((res) => {
            setData(res.data.reverse());
        })
      },[]);
    
      return (
        <div className='userList'>
          {console.log(data)}
          <DataGrid
          rows={data}
          getRowId = {(row) => row._id}
         columns={columns}
         pageSize={10}
         checkboxSelection
    />
        </div>
      )
}

export default GasLevel