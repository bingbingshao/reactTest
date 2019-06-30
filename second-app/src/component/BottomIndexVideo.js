import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import FilterList from '../component/FilterList.js';
import VideoMenu from '../component/VideoMenu.js';
import {
    Link
} from 'react-router-dom'
class BottomIndexVideo extends Component {
  render() {
    return (   
        <div className="bottomindex">     
            <Nav NavTitle="nav noborder"  NavName="视频">
                <div className="icon"></div>
            </Nav>
			<p className="margin45"></p>
			<FilterList/>
			<VideoMenu/>
            <p className="margin70"></p>
        </div>
    );
  }
}

export default BottomIndexVideo;