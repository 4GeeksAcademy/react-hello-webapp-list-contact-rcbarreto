import React from "react";

export const DeleteContact = ({ show, onClose, onConfirm }) => {
    if (!show) return null; // No renderizar si `show` es falso

    // Manejar el evento de clic en el fondo del modal
    const handleBackdropClick = (e) => {
        // Verificar si se hizo clic fuera del contenido del modal
        if (e.target.classList.contains("modal")) {
            onClose(); // Cerrar modal
        }
    };

    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block'}} // Asegúrate de que se muestre correctamente
                onClick={handleBackdropClick} // Manejar clic en el fondo
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirmar Eliminación</h5>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>¿Estás seguro de que deseas eliminar este contacto?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                            <button type="button" className="btn btn-danger" onClick={onConfirm}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div> {/* Fondo del modal */}
        </>
    );
};
