import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const CreateContact = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [contact, setContact] = useState({});
    const [error, setError] = useState(''); // Estado para el mensaje de error

    const manejoErorVacio = async () => {
        // Validar que no haya campos vacíos
        if (!contact.name || !contact.phone || !contact.email || !contact.address) {
            setError('Por favor, completa todos los campos.'); 
            return; 
        }

        // Limpiar el mensaje de error si todos los campos están completos
        setError('');

        // Llamar a la acción para crear el contacto
        await actions.createContact(contact);
        navigate(-1); // Volver a la página anterior
    };

    return (
        <div className="container">
            {error && <div className="alert alert-danger mt-3">{error}</div>} {/* Mostrar el mensaje de error con margen superior */}

            <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input 
                    onChange={(e) => setContact({ ...contact, name: e.target.value })} 
                    value={contact.name || ''} 
                    type="text" 
                    className="form-control"  
                    placeholder="Full Name"
                />
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input 
                    onChange={(e) => setContact({ ...contact, email: e.target.value })} 
                    value={contact.email || ''} 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter email"
                />
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Phone</label>
                <input 
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })} 
                    value={contact.phone || ''} 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter phone number"
                />
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Address</label>
                <input 
                    onChange={(e) => setContact({ ...contact, address: e.target.value })} 
                    value={contact.address || ''} 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter address"
                />
            </div>
                    
            <button 
                onClick={manejoErorVacio} 
                type="button" 
                className="btn btn-primary me-3"
            >
                Save
            </button>
           
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};
