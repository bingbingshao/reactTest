import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import ClassListItem from '../component/ClassListItem.js';
  class ClassList extends Component {
  render() {
    return (
        <div className="page">
			<Nav NavTitle="nav noborder" back={this.props} backto="/teacher" NavLeft="fa fa-chevron-left" NavName="班级列表">
            <div className="icon"></div>
        </Nav>	
			 <p className="margin45"></p>	
			<p>&nbsp;</p>
			<div className="classlist">
				<ClassListItem/>
				<ClassListItem/>
				<ClassListItem/>
				<ClassListItem/>	
			</div>
			<div className="classlist">
				<ClassListItem/>
				<ClassListItem/>
				<ClassListItem/>
				<ClassListItem/>	
			</div>
			<div className="classlist">
				<ClassListItem/>
				<ClassListItem/>
				<ClassListItem/>
				<ClassListItem/>	
			</div>
			<div className="classlist">
				<ClassListItem/>
				<ClassListItem/>
				<ClassListItem/>
				<ClassListItem/>	
			</div>	
			
		</div>
    );
  }
}
export default ClassList;