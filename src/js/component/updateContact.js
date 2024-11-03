import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UpdateContact = ({ props }) => {

    if (!show) return null; // No renderizar si `show` es falso

    // Manejar el evento de clic en el fondo del modal
    const handleBackdropClick = (e) => {
        if (e.target.classList.contains("modal")) {
            onClose(); // Cerrar modal
        }
    };

    const [contact, setContact] = useState({}); // Inicializar estado del contacto

    // Función para manejar cambios en los inputs
    const handleInputChange = (field) => (e) => {
        setContact({ ...contact, [field]: e.target.value }); // Generalizar el manejo de inputs
    };

    // Función para manejar la acción de guardar
    const handleSave = async () => {
        await actions.createContact(contact); // Suponiendo que `actions` está definido en el contexto
        onConfirm(); // Llamar a onConfirm después de guardar
    };

    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block' }} // Asegurarse de que se muestre correctamente
                onClick={handleBackdropClick} // Manejar clic en el fondo
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Actualizar Contacto</h5>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Cerrar"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                {["name", "email", "phone", "address"].map((field) => (
                                    <div className="mb-3" key={field}>
                                        <label className="form-label fw-bold">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                        <input
                                            onChange={handleInputChange(field)}
                                            value={contact[field] || ''}
                                            type="text"
                                            className="form-control"
                                            placeholder={`Ingresar ${field}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>Actualizar Contacto</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div> {/* Fondo del modal */}
        </>
    );
};
