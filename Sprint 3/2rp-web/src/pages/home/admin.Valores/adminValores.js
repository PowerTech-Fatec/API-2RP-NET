import Sidebar from "../../../components/sidebar"
import Header from "../../../components/header/header";
import Card from "../../../components/cards/Cards";
import './adminValores.css'

import React from 'react';

function adminValores() {
  return (
    <Sidebar>
      <Header nome="Definir valores horas"></Header>

      {/* linha 1 */}
      <div className="background d-flex flex-column aling-itens-center">

        <div>
          <span className="filtroLabel">
              <label className="mt-4 mb-4 ml-2 filtro font">Usuário</label>
          </span>
          {/* card info hora extra */}
        </div>

        <div>
          <label className="lista border offset-1">Código Verba</label>
          <label className="lista border">Código Verba</label>
          <label className="lista border">Código Verba</label>
          <label className="lista border">Código Verba</label>
          <label className="lista border">Código Verba</label>
          <label className="lista border">Código Verba</label>
          <label className="lista border">Código Verba</label>

        </div>
        <div className="">
          <label className="espaco border offset-1">Código Verba</label>
          <label className="espaco border">1069</label>
          <label className="espaco border">10</label>
          <label className="espaco border">15,10</label>
          <label className="espaco border">25</label>
          <label className="espaco border">25</label>
          <label className="espaco border">25</label>
        </div>

      </div>
    </Sidebar>
  )
}

export default adminValores