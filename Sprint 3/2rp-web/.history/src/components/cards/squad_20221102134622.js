import React from "react";
import './Squad.css'

function Card(props) {
    return(
        <div className="card-container mb-4 col-6 offset-3">
            <div className="card-content">

            <div className="card-title ml-2 mt-2">
                <span>
                
                <div><h5>Usuário: {props.Usuario}</h5> <button type="button" class="btn btn-danger mt-1">Excluir</button></div>
                </span>
            </div>

            </div>
        
        </div>
    )
}

export default Card