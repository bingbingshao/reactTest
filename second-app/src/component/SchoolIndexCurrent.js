import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';

import TeacherIntro from '../component/TeacherIntro.js';
class SchoolIndexCurrent extends Component {
	
  render() {
    return (   
        <div className="schoolindex">
            <div className="mod">
				<TeacherIntro/>
				<TeacherIntro/>
				<TeacherIntro/>
				<TeacherIntro/>
			</div>
		</div>
    );
  }
}

export default SchoolIndexCurrent;