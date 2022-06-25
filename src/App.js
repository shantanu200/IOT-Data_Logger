import React,{useState,useEffect} from "react";
import axios from "axios";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Humidity from "./pages/Humidity/Humidity";
import GasLevel from "./pages/GasLevel/GasLevel";


function App() {
  const [data,setData] = useState([]);
  const [fData,setfdata] = useState([]);
  

  const fetchdata = () => {
    axios.get("http://localhost:8080/record")
    .then((res) => {
      setData(res.data.reverse());
      return res.data.reverse();
    });
  }

  useEffect(() => {
    fetchdata();
  });
  

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home data={data}/>
          </Route>
          <Route path="/temperature">
            <UserList gdata={data}/>
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/humidity">
            <Humidity />
          </Route>
          <Route path="/gasLevel">
            <GasLevel />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
