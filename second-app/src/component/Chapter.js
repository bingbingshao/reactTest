import React, { Component } from 'react';
import {
  Link,  
} from 'react-router-dom';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';

class Chapter extends Component {
  constructor(){
        super()
        this.state={sectionname:'nonesection',ifshow:true}
    }

    clickchapter=(e)=>{
        this.state.ifshow=!this.state.ifshow
        if(this.state.ifshow){
            this.setState({sectionname:'nonesection'})
        }else{
            this.setState({sectionname:'section'})
        }
    }
  render() {
    return (
        <div className="chapter" onClick={this.clickchapter}>
            <p>第一章：走进语文</p>
            <div className={this.state.sectionname}>
                <p>|-第一节：人与自然</p>
                <p>|-第二节：人与自然</p>
            </div>	
        </div>
    );
  }
}

export default Chapter;

