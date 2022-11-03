import React from "react";
import './Squad.css'

function Card(props) {
    return(
        <div className="card-container mb-3 col-6 offset-1">
            <div className="card-content">

            <div className="card-title ml-2 mt-2">
                <span>
                <h5>Usuário: {props.Usuario}</h5> <div><button type="button" class="btn btn-danger mt-1">Excluir</button></div>
                </span>
            </div>

            </div>
        
        </div>
    )
}

export default Card