import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import PaperIndex from '../component/PaperIndex.js';
import PaperDetail from '../component/PaperDetail.js';
import Nav from '../component/Nav.js';
class Test4 extends Component {
  render() {
    return (
    <div className="page">
		<Nav NavTitle="nav border" backk={this.props} NavLeft="fa fa-chevron-left" NavName="试卷详情" backto="/classtestoverview">
            <div className="icon"></div>
        </Nav>
		<p className="margin45"></p>
		<PaperIndex PaperDetailName={PaperDetail}/>
		<div className="nextbtn">
					<div className="before left">			   		   
						<div className="fa fa-angle-right"></div>				   
					</div>
					<div className="after left">			   
					 <Link to="/Test3"><span>上一题</span></Link>
					 </div>				
					<div className="before right">               			
						<div className="fa fa-angle-left"></div>               						
					</div>		
					<div className="after right">               			              		
						<Link to="/Test5"><span>下一题</span></Link>	
					</div>
				</div>
		</div>
    );
  }
}

export default Test4;