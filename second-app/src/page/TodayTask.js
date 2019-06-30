import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import FilterList from '../component/FilterList.js';
import{
    Link
}from 'react-router-dom'
class TodayTask extends Component {
    constructor(){
        super();
        this.state={calendarshow:'nonecalendar',ifshow:true}
    }
    clickCalendar=(e)=>{
        this.state.ifshow=!this.state.ifshow
        if(this.state.ifshow){
            this.setState({calendarshow:'nonecalendar'})
        }else{
            this.setState({calendarshow:'calendar'})
        }
    }
  render() {
    return (
        <div className="page">
        <Nav NavTitle="nav border" back={this.props} backto="/studentmenu" NavLeft="fa fa-chevron-left"NavName="今日作业"> 
            <div className="icon date" onClick={this.clickCalendar}>
                <div>17/09/26</div>
                <div className={this.state.calendarshow}>
                    <img src={require("../css/image/calendar.png")}></img>
                </div>
            </div>
        </Nav>
        <p className="margin45"></p>
        <FilterList />
        <div className="testlist">         
            <Link to="/paperwork" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>作业名称：三年级语文</p>
                        <p>科目：<span className="tip">语文</span></p>
                        <p>批改状态：<span className="tip">已批改</span> 
                        提交：
                        <span className="tip">已提交</span></p>
                    </span>
                </div>
                <div className="itempart">
                </div>					
            </Link>
            <Link to="/paperwork" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>作业名称：三年级语文</p>
                        <p>科目：<span className="tip">语文</span></p>
                        <p>批改状态：<span className="tip">已批改</span> 
                        提交：
                        <span className="tip">已提交</span></p>
                    </span>
                </div>
                <div className="itempart">
                </div>					
            </Link>
            <Link to="/paperwork" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>试卷名称：三年级语文</p>							
                        <p>科目：<span className="tip">语文</span></p>
                        <p>批改状态：<span className="tip" id="red1">未批改</span>
                        提交：
                        <span className="tip" id="red1">未提交</span></p>
                    </span>
                </div>
                <div className="itempart">
                </div>					
            </Link>
            <Link to="/paperwork" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>作业名称：三年级语文</p>
                        <p>科目：<span className="tip">语文</span></p>
                        <p>批改状态：<span className="tip">已批改</span> 
                        提交：
                        <span className="tip">已提交</span></p>
                    </span>
                </div>
                <div className="itempart">
                </div>					
            </Link>
            <Link to="/paperwork" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>作业名称：三年级语文</p>
                        <p>科目：<span className="tip">语文</span></p>
                        <p>批改状态：<span className="tip">已批改</span> 
                        提交：
                        <span className="tip">已提交</span></p>
                    </span>
                </div>
                <div className="itempart">
                </div>					
            </Link>
            <Link to="/paperwork" className="testitem">
                <div className="itempart">
                    <img src={require("../css/image/testicon.png")}></img>
                    <span className="fontsize14">
                        <p>作业名称：三年级语文</p>
                        <p>科目：<span className="tip">语文</span></p>
                        <p>批改状态：<span className="tip">已批改</span> 
                        提交：
                        <span className="tip">已提交</span></p>
                    </span>
                </div>
                <div className="itempart">
                </div>					
            </Link>
        </div>
        <p className="margin45"></p>
    </div>
    );
  }
}

export default TodayTask;