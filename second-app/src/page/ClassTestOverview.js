import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import{
    Link
} from 'react-router-dom'
class ClassTestOverview extends Component {
    constructor(){
        super()
        this.state={viewclass:'noneview',ifshow:true}
    }
    
    clickeye=(e)=>{
        this.state.ifshow=!this.state.ifshow
        if(this.state.ifshow){
            this.setState({viewclass:'noneview'})
        }else{
            this.setState({viewclass:'view'})
        }
    }

  render() {
    return (
        <div className="page">
        <Nav NavTitle="nav border clickeye" back={this.props} backto="/classtestcount" NavLeft="fa fa-chevron-left" NavName="教师试卷总览">
         <div className="icon" onClick={this.clickeye}>
            <div className="fa fa-eye font21" id="blue1"></div>
            <div className={this.state.viewclass}>
                <div className="subview">
                    <div className="viewtitle">总览</div>
                    <p>2016-6-20&nbsp;8:56:30</p>
                    <div className="viewrow">
                        <div>答题人</div>
                        <div className="white">张三</div>
                    </div>
                    <div className="viewrow">
                        <div>得分</div>
                        <div className="width50 white">1</div>
                    </div>
                    <div className="viewrow">
                        <div>用时</div>
                        <div className="white">54</div>
                    </div>							
                    <p className="tip">批改情况</p>							
                    <div className="viewcolumn">
                        <div className="viewtype">
                            <span>正确</span>
                            <i className="circle green"></i>
                            <span>错误</span>
                            <i className="circle red"></i>
                            <span>未批改</span>
                            <i className="circle yellow"></i>
                        </div>
                        <p>一、填空（1分）</p>
                        <div className="info">
                            <i className="circle white">1</i>
                            <span>0</span>
                        </div>
                        <p>二、选择（4分）</p>
                        <div className="info">
                            <i className="circle white">1</i>
                            <span>0</span>
                        </div>
                        <div className="info">
                            <i className="circle white">2</i>
                            <span>0</span>
                        </div>
                        <div className="info green">
                            <i className="circle white">3</i>
                            <span>1</span>
                        </div>
                        <div className="info green">
                            <i class="circle white">4</i>
                            <span>1</span>
                        </div>
                    </div>										
                </div>
            </div>
        </div>
         </Nav>
        <p className="margin45"></p>
        <div className="paperform">
            <div className="paperformitem">
                <div className="numlabel">1</div>
                <span>一个数被42除，商是128，这个数是</span>
                <div className="answer">32</div>
            </div>
            <div className="paperformitem">				
                <span>评语：</span>					
            </div>
            <div className="paperformitem right">					
                <span id="red1">正确答案：1234</span>
                <span>得分：0</span>
            </div>
        </div>
        <div className="paperform">
            <div className="paperformitem">
                <div className="numlabel">1</div>
                <span>一个数被42除，商是128，这个数是</span>
                <div className="answer">32</div>
            </div>
            <div className="paperformitem">				
                <span>评语：</span>					
            </div>
            <div className="paperformitem right">					
                <span id="red1">正确答案：1234</span>
                <span>得分：0</span>
            </div>
        </div>
        <div className="paperform">
            <div className="paperformitem">
                <div className="numlabel">1</div>
                <span>一个数被42除，商是128，这个数是</span>
                <div className="answer">32</div>
            </div>
            <div className="paperformitem">				
                <span>评语：</span>					
            </div>
            <div className="paperformitem right">					
                <span id="red1">正确答案：1234</span>
                <span>得分：0</span>
            </div>
        </div>
        <div className="paperform">
            <div className="paperformitem">
                <div className="numlabel">1</div>
                <span>一个数被42除，商是128，这个数是</span>
                <div className="answer">32</div>
            </div>
            <div className="paperformitem">				
                <span>评语：</span>					
            </div>
            <div className="paperformitem right">					
                <span id="red1">正确答案：1234</span>
                <span>得分：0</span>
            </div>
        </div>
        <p>&nbsp;</p>
        
        <Link to="/test1" className="confirmbtn">
            <span className="green">
            进入试题
            </span>
        </Link>
        <p className="margin45"></p>
    </div>
    );
  }
}

export default ClassTestOverview;