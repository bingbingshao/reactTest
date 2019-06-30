import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import FilterList from '../component/FilterList.js';
import BookMenu from '../component/BookMenu.js';
import{
	Link
}from 'react-router-dom'
class BottomIndexBook extends Component {
  render() {
    return (   
      <div className="bottomindex show">      
          <Nav NavTitle="nav noborder" NavName="书架">
              <div className="icon"></div>
          </Nav>
			<p className="margin45"></p>
			<div className="content">		
				<FilterList/>
			</div>			
			<BookMenu/>
			<p className="margin70"></p>
        </div>
         );
  }
}

export default BottomIndexBook;