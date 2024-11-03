import React, {useEffect, useState, useContext} from "react";
import { Link , useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import {DeleteContact} from "./deleteContact.js";
import { UpdateContact } from "../views/updateContactForm.js";


export const ContactCard = (props)=>{

    const [showDeleteModal, setShowDeleteModal] = useState(false); 
    
    const { actions } = useContext(Context);

    return (


        <div className="card p-3 border-start border-end mx-3">
            <div className="row g-0">
                <div className="col-auto">
                    <img className="rounded-circle ms-5" src={"https://i.pravatar.cc/150?img=" + props.id} />
                </div>
                <div className="col">
                    <div className="card-body p-0 text-start ms-5 mt-4">
                        <h5 className="card-title mb-1">{props.name}</h5>
                        <p className="card-text mb-1">
                            <i className="fa-solid fa-location-dot me-3"></i>{props.address}
                        </p>
                        <p className="card-text mb-1">
                            <i className="fa-solid fa-phone me-3"></i>{props.phone}
                        </p>
                        <p className="card-text mb-1">
                            <i className="fa-solid fa-envelope me-3"></i>{props.email}
                        </p>
                    </div>
                </div>
                
                <div className="col mt-4 d-flex justify-content-end me-3">
                    
                <Link 
                        to={`/update/${props.id}`}  
                        state={{ 
                            name: props.name, 
                            phone: props.phone, 
                            email: props.email, 
                            address: props.address, 
                            id: props.id 
                        }} 
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <i className="fa-solid fa-pen me-3" style={{ cursor: "pointer" }} />
                    </Link>
                     
                    
                    <i
                        onClick={() => setShowDeleteModal(true)} 
                        className="fa-solid fa-trash"
                        style={{ cursor: "pointer" }} 
                    />
                     <DeleteContact
                        show={showDeleteModal}
                        onClose={() => setShowDeleteModal(false)}
                        onConfirm={async () => {
                            await actions.deleteContact(props.id); 
                            
                            setShowDeleteModal(false); 
                        }} 
                    />
                       

                </div>
            </div>
        </div>


    )

}
