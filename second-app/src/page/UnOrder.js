import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import{
    Link
} from 'react-router-dom'
class UnOrder extends Component {
    constructor(){
        super();
        this.state={toggleshow:'fa fa-toggle-on',ifshow:true}
    }
    clicktoggle=(e)=>{
        this.state.ifshow=!this.state.ifshow
        if(this.state.ifshow){
            this.setState({toggleshow:'fa fa-toggle-on'})
        }else{
            this.setState({toggleshow:'fa fa-toggle-off'})
        }
    }
  render() {
    return (
        <div className="page">
        <Nav NavTitle="nav border" back={this.props} backto="/unit" NavLeft="fa fa-chevron-left" NavName="订阅频道详情">
            <div className="icon"></div>
        </Nav>
        <p className="margin45"></p>
        <div className="content">
            <img src={require("../css/image/blackbord.png")} className="blackbord"></img>
            <div className="contenttitle">
                <span className="textb1-16">上海交通大学：数学教育频道</span>
            </div>
        </div>
        
        <div className="mod">
            <div className="listitem">
                <div className="icon">
                    <img src={require("../css/image/check.jpg")}/>
                </div>
                <div className="listtext">
                    <div className="textb1-14">订阅频道介绍</div>	
                </div>
            </div>
            <div className="submod">
                <span><p className="fontb2-14 blank">为了
                进一步掀起学习、遵守、贯彻、维护党章、
                廉洁自律准则和纪律处分条例教育活动的高潮，
                践行“两学一做”，使广大党员更加全面、准确、
                深入地学习、党章、廉洁自律准则和纪律处分条
                例，进一步增强监督意识和纪律观念，2016年
                11月29日中午，我院教工党支部在学院会议室开
                展了学习党章知识竞赛活动。</p></span>
            </div>		
        </div>
        
        <div className="mod">
            <div className="listitem">
                <div className="listtitle">
                    <span className="textb1-14">新闻消息推送</span>
                </div>
                <div className="icon" onClick={this.clicktoggle}>
                    <div className={this.state.toggleshow}></div>
                </div>
            </div>
        </div>
        <p className="margin45"></p>
        <Link to="/unit" className="confirmbtn">
            <span className="green">
                添加订阅
            </span>
        </Link>
    </div>


    );
  }
}

export default UnOrder;