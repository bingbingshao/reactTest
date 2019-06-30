import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
class AboutUs extends Component {
  render() {
    return (
        <div className="page">
        <Nav NavTitle="nav border" back={this.props} backto="/setting" NavLeft="fa fa-chevron-left" NavName="关于我们">
            <div className="icon"></div>
        </Nav>    
        <p className="margin45"></p>
        <div className="content">
            <img src={require("../css/image/aboutus.jpg")}></img>
            <div className="contenttitle">
                <span className="textb1-16">学习城客户端，仅供学习使用！~</span>
            </div>
            <p className="margin70"></p>
            <p className="margin70"></p>
            <p className="margin70"></p>
        </div>
    </div>  

    );
  }
}

export default AboutUs;