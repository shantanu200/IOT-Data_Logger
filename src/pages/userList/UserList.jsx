import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import Rough from "./Rough";

export default function UserList() {
  
  const columns = [
    {headerName:"ID",field:"_id",width: 300},
    {headerName:"Temperature" ,field:"temperature" ,width: 300},
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