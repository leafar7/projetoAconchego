import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        {/* About Section ================================================== */}
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>Sobre</h2>
              <p>Grupo Aconchego. Organização sem fins lucratrivos. Há mais de 30 anos levando carinho a outras pessoas.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Detalhes para contato:</h2>
                  <p className="address">
                    <span>Grupo Aconchego</span><br />
                    <span>Rio de Janeiro<br />
                      RJ / BR
                    </span><br />
                    <span>(21)96801-8778</span><br />
                    <span>grupoaconchegoaga@gmail.com</span>
                  </p>
                </div>
               {/*  <div className="columns download">
                  <p>
                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>*/}
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section> {/* About Section End*/}


      </React.Fragment>
    )
  }
}