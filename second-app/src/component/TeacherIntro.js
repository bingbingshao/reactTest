import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import {
    Link
} from 'react-router-dom'
class TeacherIntro extends Component {
    constructor(){
		super()
		this.state={tipclass:'longtext',tipname:'展开',tipsign:'fa fa-caret-down',ifopen:true}
		
	}
    
	clickOpentip=(e)=>{
		e.preventDefault()
		this.state.ifopen=!this.state.ifopen
		if(this.state.ifopen){
			this.setState({tipclass:'longtext',tipname:'展开',tipsign:'fa fa-caret-down'})
		}else{
			this.setState({tipclass:'showlongtext',tipname:'收起',tipsign:'fa fa-caret-up'})
		}
	}
  render() {
    return (   
            <Link to="/teacherdetail" className="submod thick">
                <div className="cell">
                    <div className="cellimg3">
                        <img src={require("../css/image/teacher1.jpeg")} alt="加载失败"/>
                    </div>
                    <div className="content nopadding">
                        <div className="contenttext textb1-14">
                            <p>刘老师</p>	
                        </div>
                        <div className="contenttext textb2-12">
                            <p className={this.state.tipclass}>现任上海交通大学党
                            委书记，主持学校党委全面工作，联系材料科学与工程学院、
                            马克思主义哲学家，国内一流互联网技术工现任上海交通大学党
                            委书记，主持学校党委全面工作，联系材料科学与工程学院、
                            马克思主义哲学家，国内一流互联网技术工现任上海交通大学党
                            委书记，主持学校党委全面工作，联系材料科学与工程学院、
                            马克思主义哲学家，国内一流互联网技术工</p>
                            <p className="opentip" onClick={this.clickOpentip}>
                                {this.state.tipname}
                                <label className={this.state.tipsign}></label>
                            </p>
                        </div>	
                        <div className="contenttext">
                            <p className="sofar">（2009~至今）</p>	
                        </div>
                    </div>
                </div>
            </Link>
         );
  }
}

export default TeacherIntro;