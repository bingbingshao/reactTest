import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import PaperIndex from '../component/PaperIndex.js';
import PaperDetailAnswer from '../component/PaperDetailAnswer.js';
import Nav from '../component/Nav.js';
import {
    Link
} from 'react-router-dom'
class Answer4 extends Component {
  render() {
    return (
<div className="page">
			<p className="margin45"></p>
			<Nav NavTitle="nav border" back={this.props} NavLeft="fa fa-chevron-left" NavName="试卷详情" backto="/stupageoverview">
				<div className="icon"></div>
			</Nav>
			<PaperIndex PaperDetailName={PaperDetailAnswer}/>
			<div className="nextbtn">
				<div className="before left">			   		   
					<div className="fa fa-angle-right"></div>				   
				</div>
				<div className="after left">			   
					<Link to="/answer3"><span>上一题</span></Link>				   
				</div>				
				<div className="before right">               			
					<div className="fa fa-angle-left"></div>               						
				</div>		
				<div className="after right">               			              		
					<Link to="/HandPainted5"><span>下一题</span></Link>					
				</div>	
			</div>
		</div>
        );
  }
}
        export default Answer4;