import React,{useState,useEffect} from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo({data}) {
  
  return (
    <div className="featured">
      {data.slice(0,1).map((val,key)=>{
        return (
        <>
       <div className="featuredItem">
        <span className="featuredTitle">Temperature</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{val.temperature}</span>

        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Humidty</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{val.humidity}</span>
          
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Gas Level</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{val.gasLevel}</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
        
          </>
        )
      })}
      </div>
  );
}
