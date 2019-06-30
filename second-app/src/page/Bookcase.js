import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import BottomIndexBook from '../component/BottomIndexBook.js';
import BottomMenu from '../component/BottomMenu.js';


class Bookcase extends Component {
  render() {
    return (
      <div className="page">
        <BottomIndexBook/>		
        <p className="margin70"></p>	
        <BottomMenu/>
      </div>	
    );
  }
}
export default Bookcase;