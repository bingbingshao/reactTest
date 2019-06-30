import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import {
    Link
} from 'react-router-dom'
class ClassListItem extends Component {
    constructor(){
		super()
		this.state={iconshow:'fa fa-angle-down',jumpname:'noneclasslistjump',ifopen:true}
	}

	classlistclick=(e)=>{
		this.state.ifopen=!this.state.ifopen
		if(this.state.ifopen){
			this.setState({iconshow:'fa fa-angle-down',jumpname:'noneclasslistjump'})
		}else{
			this.setState({iconshow:'fa fa-angle-up',jumpname:'classlistjump'})
		}
	}
  render() {
    return (
    <div className="subclasslist" onClick={this.classlistclick}>
        <div className="classlistitem">
            <div className="listtext">
                <span className="textb2-16">【一年级】一班</span>
            </div>
            <div className="icon">
                <div className={this.state.iconshow}></div>
            </div>
        </div>
        <div className={this.state.jumpname}> 
            <Link to="/studentlist" className="classlistitem">
                <div className="listtext">
                    <span className="textb2-16">|&nbsp;-&nbsp;学生列表</span>
                </div>
                <div className="icon">
                    <div className="fa fa-angle-right font24"></div>						
                </div>
            </Link>
    
            <Link to="/worklist" className="classlistitem">
                <div className="listtext">
                    <span className="textb2-16">|&nbsp;-&nbsp;作业列表</span>
                </div>
                <div className="icon">
                    <div className="fa fa-angle-right font24"></div>						
                </div>
            </Link>
        </div>
    </div>
    );
  }
}
export default ClassListItem;