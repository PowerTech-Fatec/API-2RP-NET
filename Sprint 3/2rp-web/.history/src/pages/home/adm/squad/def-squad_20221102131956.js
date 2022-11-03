import Sidebar from "../../../../components/sidebar"
import Header from "../../../../components/header/header";
import Card from "../../../../components/cards/Squad"
import './gestor.css'

import React, { Component, useEffect, useState } from 'react';


function Squad() {
    return (
        <Sidebar>
          <Header nome="Horas Extras"></Header>

          {/* linha 1: solitações, filtro */}
          <div className="background d-flex flex-column aling-itens-center">
            
            <div>
            <span className="soli">
            <label className="font">Solicitações hora extra</label> 
            </span>

            <span className="filtroLabel">
            <label className="font">Filtro</label> <input className="mt-4 mb-4 ml-2"></input>
            </span>

            {/* card info hora extra */}
            <div className="d-flex flex-column aling-itens-center">
            <Card 
              Funcionario = " Silhana Manavento"
              Data = "25/10/11"
              HoraInicial = "11:00"
              HoraFinal = "17:00"
            />

            <Card 
              Funcionario = " Magno Antonio"
              Data = "26/10/11"
              HoraInicial = "12:00"
              HoraFinal = "18:00"
            />

            <Card 
              Funcionario = "Felipe Silva"
              Data = "26/10/11"
              HoraInicial = "12:00"
              HoraFinal = "18:00"
            />
            </div>
            

            </div>
              
          </div>
        </Sidebar>
    )
}

export default Squad