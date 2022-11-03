import Sidebar from "../../../../components/sidebar"
import Header from "../../../../components/header/header";
import Card from "../../../../components/cards/Squad"
import './def-squad.css'

import React, { Component, useEffect, useState } from 'react';


function Squad() {
    return (
        <Sidebar>
          <Header nome="Definir Squad"></Header>

          {/* linha 1: solitações, filtro */}
          <div className="background d-flex flex-column aling-itens-center">
            
            <div>
            <div className="border col-12 d-flex justify-content-around">
            <span className="soli">
            <label className="font">Nome Squad</label> <input className="squad-name mt-4 mb-4 ml-2"></input>
            </span>
        
            

            
            <span className="filtroLabel">
            <input className="squad-name mt-4 mb-4"></input><button type="button" class="btn btn-success mt-1">Adicionar colaborador</button>
            </span>
            </div>
            

            {/* card info hora extra */}
            <div className="d-flex flex-column aling-itens-center">
            <Card 
              Usuario = " Silhana Manavento"
            />

            </div>
            

            </div>
              
          </div>
        </Sidebar>
    )
}

export default Squad