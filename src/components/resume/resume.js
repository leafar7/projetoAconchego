import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return  (
        <React.Fragment>
            {/* Resume Section
   ================================================== */}
<section id="resume">
  {/* Education
----------------------------------------------- */}
  <div className="row education">
    <div className="three columns header-col">
      <h1><span>Education</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Federal University of the State of Rio de Janeiro - UNIRIO </h3>
          <p className="info">bachelor degree at Information Systems <span>•</span> <em className="date">April 2011</em></p>
          <p>At my time OF study i learned all of technologies to try my best way to be inserted inside world market.
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>School of Life</h3>
          <p className="info"> Changing carrer or trying it <span>•</span> <em className="date">March 2019</em></p>
          <p>
            I started to learn and self learning about REactJs that this own site is build it. And all stuffs around it, like HTML 5, SCSS,JavaScript, NodeJs,etc.
          </p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Education */}
  {/* Work--------------------------------------------- */}
  <div className="row work">
    <div className="three columns header-col">
      <h1><span>Work</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>This portfolio site</h3>
          <p className="info">Web developer <span>•</span> <em className="date">March 2019 - Present</em></p>
          <p>
          I started understanding some concepts of React, because 
          i already know things about programming because i am IT 
          professional for some time, but never worked only with programming until now.
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>Reserved for my next Project</h3>
          <p className="info"> :) Thinking of It <span>•</span> <em className="date">March 2019 - Present</em></p>
          <p>
            Thinking !
          </p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Work */}
  {/* Skills--------------------------------------------- */}
  <div className="row skill">
    <div className="three columns header-col">
      <h1><span>Skills</span></h1>
    </div>
    <div className="nine columns main-col">
      <p>ReactJs,Html, CSS, Javascript,NodeJs.
      </p>
      <div className="bars">
        <ul className="skills">
          
        <li><span className="bar-expand wordpress" /><em>ReactJs</em></li>
        <li><span className="bar-expand wordpress" /><em>Html</em></li>
        <li><span className="bar-expand wordpress" /><em>CSS</em></li>
        <li><span className="bar-expand wordpress" /><em>Javascript</em></li>
        <li><span className="bar-expand wordpress" /><em>NodeJs</em></li>
          
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


        </React.Fragment>
    )
    ;
  }
}
