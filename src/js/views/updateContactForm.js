import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const UpdateContact = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation(); // Obtener la ubicación
    const [error, setError] = useState('');
    const { name, phone, email, address, id } = location.state || {}; // Extraer los datos del estado
    const [contact, setContact] = useState({ name, phone, email, address, id }); // Inicializar el estado

    useEffect(() => {
        // Si la ubicación cambia, actualizar el estado del contacto
        setContact({ name, phone, email, address, id });
    }, [name, phone, email, address, id]); // Añadir 'id' al array de dependencias

    const manejoErorVacio = async () => {
        // Validar que no haya campos vacíos
        if (!contact.name || !contact.phone || !contact.email || !contact.address) {
            setError('Por favor, completa todos los campos.'); 
            return; 
        }

        // Limpiar el mensaje de error si todos los campos están completos
        setError('');

        // Llamar a la acción para actualizar el contacto
        await actions.updateContact(contact);
        navigate(-1); // Volver a la página anterior
    };

    return (
        <div className="container">
            <div className="col-auto">
                <img className="rounded-circle ms-5" src={`https://i.pravatar.cc/150?img=${contact.id}`} alt="Perfil" />
            </div>

            {error && <div className="alert alert-danger mt-3">{error}</div>} {/* Mostrar mensaje de error */}

            <div className="mb-3">
                <label className="form-label fw-bold">Nombre</label>
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
                <label className="form-label fw-bold">Teléfono</label>
                <input 
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })} 
                    value={contact.phone || ''} 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter phone number"
                />
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Dirección</label>
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
                type="submit" 
                className="btn btn-primary me-3"
            >
                Save
            </button>

            <Link to="/">
                <button className="btn btn-secondary">Back home</button>
            </Link>
        </div>
    );
};
