import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';

class FilterList extends Component {
    constructor(){
        super();
        this.state={filterbtnshow:'fa fa-angle-down',filterlistshow:'nonefilterlist',ifshow:false}
    }
    clickfilterbtn=(e)=>{
        this.state.ifshow=!this.state.ifshow
        if(this.state.ifshow){
            this.setState({filterbtnshow:'fa fa-angle-up',filterlistshow:'filterlist'})
        }else{
            this.setState({filterbtnshow:'fa fa-angle-down',filterlistshow:'nonefilterlist'})
        }
    }
  render() {
    return (   
            <div className="filterlistshow">
                <div className="booksearch">
                    <input type="text" placeholder="请输入搜索内容"></input>
                    <div className="searchbtn">
                        <div className="fa fa-search"></div>	
                    </div>
                </div>
                <div className="filter" onClick={this.clickfilterbtn}>
                    <span>筛选</span>		
                    <div className="filterbtn">
                        <div className={this.state.filterbtnshow}></div>
                    </div>
                    <div className={this.state.filterlistshow}>
                        <div className="row">
                            <div className="type">年级</div>
                            <div className="all">全部</div>
                            <div className="typecontent">
                                <div className="checked">一年级</div><div>二年级</div><div>三年级</div>
                                <div>四年级</div><div>五年级</div><div>六年级</div><div>七年级</div>
                                <div>八年级</div><div>九年级</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="type">班级</div>
                            <div className="all">全部</div>
                            <div className="typecontent">
                                <div>一班</div><div>二班</div><div className="checked">三班</div>
                                <div>四班</div><div>五班</div><div>六班</div><div>七班</div>
                                <div>八班</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="type">科目</div>
                            <div className="typecontent">
                                <div>语文</div><div>数学</div><div>物理</div>
                                <div>化学</div><div>美术</div><div>音乐</div><div>地理</div>
                                <div>英语</div><div>历史</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="type">版本</div>
                            <div className="typecontent">
                                <div>沪教版</div><div>苏教版</div><div>人教版</div>
                            </div>
                        </div>				
                    </div>
                </div>
            </div>
         );
  }
}

export default FilterList;