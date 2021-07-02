import React ,{Component} from'react';

export default class About extends Component{
    render(){
        return(
            <React.Fragment>
        {/* About Section
   ================================================== */}
<section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="images/profilepic.jpg" alt />
    </div>
    <div className="nine columns main-col">
      <h2>About Me</h2>
      <p>I am a person who thinks in a better way to help others wiht knowledge and comprehension.
      </p>
      <div className="row">
        <div className="columns contact-details">
          <h2>Contact Details</h2>
          <p className="address">
            <span>Rafael Vieira Cano</span><br />
            <span>Rio de Janeiro<br />
                  RJ / BR
            </span><br />
            <span>(21)9XXXX-XXXX</span><br />
            <span>myalias@dominio.com</span>
          </p>
        </div>
        <div className="columns download">
          <p>
            <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
          </p>
        </div>
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section> {/* About Section End*/}


            </React.Fragment>
        )
    }
}