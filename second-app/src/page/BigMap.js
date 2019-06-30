import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';

class BigMap extends Component {
  render() {
    return (
      <div className="page">
			<Nav NavTitle="nav noborder" back={this.props} backto="/map" NavLeft="fa fa-chevron-left" NavName="位置详情">
            <div className="icon"></div>
        </Nav>	
			<p className="margin45"></p>
			<div className="map"></div>
		</div>
    );
  }
}

export default BigMap;
