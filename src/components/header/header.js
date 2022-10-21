import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

        {/* Header
   ================================================== */}
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Principal</a></li>
              <li><a className="smoothscroll" href="#about">Sobre</a></li>
              <li><a className="smoothscroll" href="#resume">Resumo</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contato</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h2>{resumeData.role} {resumeData.roleDescription}.</h2>


              <hr />
              <ul className="social">
                {
                  <li><a href="https://www.facebook.com/groups/2158607287616757"><i className="fa fa-facebook" /></a></li>}
                {/* 
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li> 
                  <li><a href="https://linkedin.com/in/rafael-cano-a1239b3b/"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="https://github.com/leafar7"><i className="fa fa-github" /></a></li>
                */}
                  <li><a href="https://www.instagram.com/grupo_aconchego/"><i className="fa fa-instagram" /></a></li>
                 { /*<li><a href="#"><i className="fa fa-dribbble" /></a></li>
                  <li><a href="#"><i className="fa fa-skype" /></a></li> 
                */}
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>

        </header> {/* Header End */}

      </React.Fragment>
    )
  }
}