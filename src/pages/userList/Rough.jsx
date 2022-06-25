import axios from 'axios';
import React,{useState,useEffect} from 'react'
import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';



const Rough = () => {
   let count = 0;

  const columns = [
    {headerName:"ID",field:"_id",width: 300},
    {headerName:"Temperature" ,field:"temperature" ,width: 300},
    {headerName:"Date and Time",field:"createdAt",width:300}
  ]
  const [data,setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/record")
    .then((res) => {
        setData(res.data);
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

export default Rough