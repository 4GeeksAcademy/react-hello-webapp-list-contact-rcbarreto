import React, {useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext";
import { Link , useNavigate } from "react-router-dom";
import {DeleteContact} from "./deleteContact.js";


export const ContactCard = (props)=>{

    const [showModal, setShowModal] = useState(false);
    const { actions } = useContext(Context);

    return (


        <div className="card p-3">
            <div className="row g-0">
                <div className="col-auto">
                    <img className="rounded-circle" src={"https://i.pravatar.cc/150?img=" + props.id} />
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
                <div className="col mt-4">
                    
                    <i className="fa-solid fa-pen me-3"></i>
                    
                    <i
                        onClick={() => setShowModal(true)} // Abre el modal
                        className="fa-solid fa-trash"
                        style={{ cursor: "pointer" }} // Cambia el cursor a puntero
                    />
                     <DeleteContact
                        show={showModal}
                        onClose={() => setShowModal(false)}
                        onConfirm={async () => {
                            await actions.deleteContact(props.id); // Llama a deleteContact con el ID
                            
                            setShowModal(false); // Cierra el modal después de eliminar
                        }} // Pasa la función de confirmación
                    />
                       

                </div>
            </div>
        </div>


    )

}
