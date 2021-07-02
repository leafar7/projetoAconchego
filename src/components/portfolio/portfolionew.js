import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
        <React.Fragment>
    ============================= */}
<section id="portfolio">
  <div className="row">
    <div className="twelve columns collapsed">
      <h1>Check Out Some of My Works.</h1>
      {/* portfolio-wrapper */}
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href="#" title>
              <img alt src="#" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>Project Subject</h5>
                  <p>Space for project Type</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div> {/* item end */}
       </div> 
      </div> 
    
    <div id="modal-01" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt />
      <div className="description-box">
        <h4>Project description</h4>
        <p>DEscribing the techs and the project itself</p>
        <span className="categories"><i className="fa fa-tag" />Webdesign or Webdevelopment</span>
      </div>
      <div className="link-box">
        <a href="#">Details</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
    </div> {/*} row End */}
</section> {/* Portfolio Section End*/}

        </React.Fragment>
    )
  }
}
