import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import {
    Link
} from 'react-router-dom'
class BottomIndexMic extends Component {
  constructor(){
        super();
        this.state={pos:0};		
        this.interval=0;
        this.indeximg=[{src:require("../css/image/newsimg4.jpeg")},
                    {src:require("../css/image/newsimg3.jpeg")},
                    {src:require("../css/image/newsimg2.jpeg")},
                    {src:require("../css/image/newsimg1.jpeg")}]
    }	

    componentDidMount(){
        this.clock();
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    clock(){
        this.interval=setInterval(()=>{
            this.state.pos++;
            var	pos = this.state.pos%this.indeximg.length;
            this.setState({pos:pos});
        },2000);
    }

    clickdot=(e)=>{
      var pos = e.target.getAttribute('data-key');
			this.setState({pos:pos});
    }

    mouseenter=(e)=>{
        clearInterval(this.interval);
    }

    mouseleave=(e)=>{
        this.clock();
    }

  render() {
    return (   
        <div className="bottomindex">
          <Nav NavTitle="nav noborder"  NavName="上海交通大学首页">
                <div className="icon"></div>
            </Nav> 
          <p className="margin45"></p>
          <div className="indeximg" onMouseEnter={this.mouseenter} onMouseLeave={this.mouseleave}>
            {
                this.indeximg.map((info,i)=>{
                    if(this.state.pos==i){
                        return(<img src={info.src} alt="加载失败" className='show' key={i}></img>);
                    }else{
                        return(<img src={info.src} alt="加载失败" key={i}></img>);
                    }
                })
            }
            
              <div className="dot">
                {
                    this.indeximg.map((info,i)=>{
                        if(this.state.pos==i){
                            return(<div className="fa fa-circle show" onClick={this.clickdot} data-key={i} key={i}></div>);
                        }else{
                            return(<div className="fa fa-circle" onClick={this.clickdot} data-key={i} key={i}></div>);
                        }
                    })
                }
              </div>
          </div>
        <div className="schoolmenu">
          <div className="subschoolmenu">
              <Link to="/schooloverview" className="schoolmenuitem">
                <div className="fa fa-university" id="green2"></div>
                <span>学校概况</span>
              </Link>
              <Link to="/teacherteam" className="schoolmenuitem">
                <img src={require("../css/image/team.jpg")}  alt="加载失败"/>                
                <span>教师团队</span>
              </Link>
              <Link to="/campusactivities" className="schoolmenuitem">
                <div className="fa fa-comments" id="green1"></div>
                <span>校园动态</span>
              </Link>
          </div>
          <div className="subschoolmenu">
              <Link to="/windowofparty" className="schoolmenuitem">
                <div className="fa fa-flag" id="red1"></div>
                <span>党建之窗</span>
              </Link>
              <Link to="/schoolhonor" className="schoolmenuitem">
                <div className="fa fa-trophy" id="orange1"></div>
                <span>学校荣誉</span>
              </Link>
              <Link to="/campusstar" className="schoolmenuitem">
                <div className="fa fa-star"></div>
                <span>校园之星</span>
              </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomIndexMic;