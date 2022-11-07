import Sidebar from "../../../../components/sidebar"
import Header from "../../../../components/header/header";
import Card from "../../../../components/cards/Squad"
import './def-squad.css'

import React, { Component, useEffect, useState } from 'react';


function Squad() {
    return (
        <Sidebar>
          <Header nome="Definir Squad"></Header>

          {/* linha 1: nome squad/add colaborador */}
          <div className="background d-flex flex-column aling-itens-center">
            
            <div>
            <div className="d-flex justify-content-around">
            <div className="col-4">
            <span>
            <label className="font">Nome Squad</label> <input className="squad-name mt-4 mb-4 ml-2"></input>
            </span>
            </div>
            
        
            

            <div className="col-4 d-flex justify-content-end">
            <span>
            <input className="squad-name mt-4 mb-4"></input><button type="button" class="btn btn-success ml-3">Adicionar</button>
            </span>
            </div>
            
            </div>
            

            {/* card colaborador */}
            <div className="d-flex flex-column aling-itens-center">
            <Card 
              Usuario = "Marcelinho VIP"
            />

            </div>
              
              <div className="border d-flex justify-content-end mb-3">
              <button type="button" class="btn btn-success mt-1 mr-3">Salvar</button>
              </div>


            </div>
              
          </div>
        </Sidebar>
    )
}



export default Squad