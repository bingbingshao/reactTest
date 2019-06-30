import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import {
    Link
} from 'react-router-dom'
import Chapter from '../component/Chapter.js';
class BookExe extends Component {
    replace = (e,w) => {	
		e.preventDefault()
	 this.props.history.replace(w)
	}
  render() {
    return (
        <div className="page">
        <div className="navexe">
            <div className="icon">
                <div className="fa fa-reorder"></div>
                <div className="catalog">					
                    <div className="title"><b>目录</b></div>
                    <Chapter/>
                    <Chapter/>
                    <Chapter/>
                    <Chapter/>
                    <Link to="/bookdetail" onClick={(e)=>this.replace(e,"/bookdetail")} className="return">
                        返回
                    </Link>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="contenttitle-row">
                <img src={require("../css/image/num.jpg")}></img>
                <span className="textb1-16">卡罗尔和他的小猫</span>
            </div>
            <div className="contenttext textb2-14 tip">					
               <span><p className="blank">卡罗尔一直想有一只小猫。</p></span>
               <span><p className="blank">爸爸对卡罗尔说：“那我们
               就在报纸上登个广告吧。”</p></span>
               <span><p className="blank">广告登出来了，
               是这样写的：我们非常需要小猫。我们会给它
               安排一个非常舒适的家，会好好地照顾它。请
               问您有多余的小猫吗？</p></span>
               <span><p className="blank">卡罗尔端出一碟牛奶，还
               有一碟点心。她又把旧的软垫放在一个篮子里，就待在家
               里等起小猫来。丁零零，门铃响了。进来的是一个提着篮子
               的男孩。他说：“我家的猫生了三只小猫，我送给你一只。它
               叫洛克。”这是一只黑白相间的花猫。</p></span>	
                <p className="margin70"></p>
                <p className="margin70"></p>
                <p className="margin70"></p>
            </div>
            <div className="bottompage">
                <span className="textb2-14">31/80</span>
                <img src={require("../css/image/page.png")}></img>
            </div>		
        </div>
    </div>
    );
  }
}

export default BookExe;