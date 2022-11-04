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

        <div className="d-flex aling-itens-center">
          <label className="lista offset-1">Código Verba</label>
          <label className="lista">Valor</label>
          <label className="lista">valor Night</label>
          <label className="lista">Feriado</label>
          <label className="lista">Feriado Night</label>
          <label className="lista">Fim de Semana</label>
          <label className="lista">FDS noturno</label>

        </div>
        <div className="d-flex aling-itens-center">
          <label className="espaco tela offset-1">1069</label>
          <label className="espaco tela">10</label>
          <label className="espaco tela">15,10</label>
          <label className="espaco tela">15,10</label>
          <label className="espaco tela">25</label>
          <label className="espaco tela">25</label>
          <label className="espaco tela">25</label>
        </div>
        <div className="d-flex aling-itens-center">
          <label className="espaco2 tela offset-1">1069</label>
          <label className="espaco2 tela"></label>
          <label className="espaco2 tela"></label>
          <label className="espaco2 tela"></label>
          <label className="espaco2 tela"></label>
          <label className="espaco2 tela"></label>
          <label className="espaco2 tela"></label>
        </div>

      </div>
    </Sidebar>
  )
}

export default adminValores