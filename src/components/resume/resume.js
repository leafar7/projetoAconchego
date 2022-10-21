import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return  (
        <React.Fragment>
            {/* Resume Section ===================== */}
<section id="resume">
  {/* Grupos---------------------------------------- */}
  <div className="row education">
    <div className="three columns header-col">
      <h1><span>Grupos</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Grupo Trabalhadores </h3>
          <p className="info">Grupo  <span>•</span> <em className="date">Época que começou o projeto ex.: Desde Abril 2011</em></p>
          <p>Grupo destinado ao projeto na distribuição de comida na rua!!!
          </p>
        </div>
      </div> {/* item end */}

      <div className="row item">
        <div className="twelve columns">
          <h3>Kardec - Sala de Luz </h3>
          <p className="info">Grupo Kardec <span>•</span> <em className="date">Época que começou o projeto ex.: Desde Abril 2011</em></p>
          <p>Grupo destinado a ajudar em diversas terapias como aromaterapia e Reiki.
          </p>
        </div>
      </div> {/* item end */}
     
    </div> {/* main-col end */}
  </div> {/* End Education */}
  {/* Atividades--------------------------------------------- */}
  <div className="row work">
    <div className="three columns header-col">
      <h1><span>Atividades</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Entregas de cestas básicas</h3>
          <p className="info">Cestas básicas <span>•</span> <em className="date">Abril 2017 - Atualmente</em></p>
          <p>
          O início começou com a amizade de duas mulheres procurando 
          ajudar e confortar a barriga dos irmãos que precisam de   
          ajuda.
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>Reservado para mais um bloco de palavras caso necessário</h3>
          <p className="info"> Palavra chave destaque <span>•</span> <em className="date">Abril 2017 - Atualmente</em></p>
          <p>
            Escreva aqui !
          </p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Work */}
  {/* Habilidades em destaque Colunas preenchidas--------------------------------------------- */}
  <div className="row skill">
    <div className="three columns header-col">
      <h1><span>Entregas</span></h1>
    </div>
    <div className="nine columns main-col">
      <p>Cestas básicas, Roupas, Brinquedos, etc..
      </p>
      <div className="bars">
        <ul className="skills">
          
        <li><span className="bar-expand wordpress" /><em>Cestas Básicas</em></li>
        <li><span className="bar-expand wordpress" /><em>Roupas</em></li>
        <li><span className="bar-expand wordpress" /><em>Brinquedos</em></li>
                  
          {/*</ul>{<li><span className="bar-expand photoshop" /><em></em></li>
          <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
          <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
          <li><span className="bar-expand css" /><em>CSS</em></li>
          <li><span className="bar-expand html5" /><em>HTML5</em></li>
          <li><span className="bar-expand jquery" /><em>jQuery</em></li>*/}
        </ul>
      </div>{/* end skill-bars */}
    </div> {/* main-col end */}
  </div> {/* End skills */}
  </section> {/* Resume Section End*/}

        </React.Fragment>)
    
        }
      }
