import React, {useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext";
import { Link , useNavigate } from "react-router-dom";


export const CreateContact = (props)=>{

    const {actions} = useContext(Context);
    const navigate = useNavigate();
    const [contact , setContact] = useState ({});

    return (

        <>
        <div className="container">

            <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input onChange={(e)=> setContact({...contact, name:e.target.value})} value={contact.name || ''} type="text" className="form-control"  placeholder="Full Name"/>
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input onChange={(e)=> setContact({...contact, email:e.target.value})} value={contact.email || ''}type="text" className="form-control" placeholder="Enter email"/>
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Phone</label>
                <input onChange={(e)=> setContact({...contact, phone:e.target.value})} value={contact.phone || ''} type="text" className="form-control" placeholder="Enter phone number"/>
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Address</label>
                <input onChange={(e)=> setContact({...contact, address:e.target.value})} value={contact.address || ''} type="text" className="form-control" placeholder="Enter address"/>
            </div>
                    
                <button onClick={async ()=>{
                    
                    await actions.createContact(contact)
                    navigate(-1)
                    }} type="submit" className="btn btn-primary me-3">Save</button>
               
                <Link to="/">
				    <button className="btn btn-primary">Back home</button>
			    </Link>
        </div>

    </>

    )

}