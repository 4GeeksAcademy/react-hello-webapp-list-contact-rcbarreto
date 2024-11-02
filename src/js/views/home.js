import React , {useContext, useEffect, useState}from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext.js";

export const Home = () => {

  const {actions, store} = useContext(Context);

  return(
	
	<div className="text-center mt-5">
    
    {
      store.contacts.map((item, index)=>{
        return <h1 key={index}> {item.name} </h1>
      })
    }

		
	</div>

)};
