import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import PaperIndex from '../component/PaperIndex.js';
import PaperDetailAnswer from '../component/PaperDetailAnswer.js';
import Nav from '../component/Nav.js';
class ReductionTopic extends Component {
	backhistory = () => {	
	  this.props&&this.props&& this.props.history.goBack()
	}
  render() {
    return (
		<div className="page">
			<p className="margin45"></p>
			<Nav NavTitle="nav border" backhistory={this.backhistory} NavLeft="fa fa-chevron-left" NavName="订正">
				<div className="icon"></div>
			</Nav>
			<PaperIndex PaperDetailName={PaperDetailAnswer}/>
			<div className="nextbtn">
				<div className="before left">			   		   
					<div className="fa fa-angle-right"></div>				   
				</div>
				<div className="after left">			   
						<span>上一题</span>			   
				</div>				
				<div className="before right">               			
					<div className="fa fa-angle-left"></div>               						
				</div>		
				<div className="after right">               			              		
					<span>下一题</span>					
				</div>	
			</div>
		</div>	
         );
  }
}
        export default ReductionTopic;