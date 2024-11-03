import React, {useEffect, useState} from "react";



export const ContactCard = (props)=>{
    return (


        <div className="card p-3">
            <div className="row g-0">
                <div className="col-auto">
                    <img className="rounded-circle" src={"https://i.pravatar.cc/150?img=" + props.index} />
                </div>
                <div className="col">
                    <div className="card-body p-0 text-start ms-5 mt-4">
                        <h5 className="card-title mb-1">{props.name}</h5>
                        <p className="card-text mb-1">
                            <i className="fas fa-map-marker-alt me-2"></i>{props.address}
                        </p>
                        <p className="card-text mb-1">
                            <i className="fas fa-phone me-2"></i>{props.phone}
                        </p>
                        <p className="card-text mb-1">
                            <i className="fas fa-envelope me-2"></i>{props.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )

}
