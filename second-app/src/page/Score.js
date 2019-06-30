import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
class Score extends Component {
  render() {
    return (
        <div className="page">
			<Nav NavTitle="nav noborder" back={this.props} backto="/Setting" NavLeft="fa fa-chevron-left" NavName="评分">
            <div className="icon"></div>
        </Nav>
		</div>
    );
  }
}
export default Score;