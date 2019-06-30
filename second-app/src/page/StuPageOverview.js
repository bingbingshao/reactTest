import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import{
    Link
}from 'react-router-dom'
class StuPageOverview extends Component {
  render() {
    return (
        <div className="page">
        <Nav NavTitle="nav border" back={this.props} backto="/ableexam" NavLeft="fa fa-chevron-left" NavName="学生页面试卷总览">
            <div className="icon"></div>
        </Nav>
        <p className="margin45"></p>
        <div className="paper">							
            <p><span className="numlabel small">1</span> 1.What‘s the weather like today? it's_____。</p>
                                                        
        </div>
        <div className="paper">							
            <p><span className="numlabel small">1</span>2.你正在学习___会做___，喜欢做___。</p>														
        </div>
        <div className="paper">							
            <p><span className="numlabel small">1</span>3.请读出下面这句话：</p>
            <div className="dashed"></div>							
            <p><span>如果你无法简洁的表达你的想法，那只说明你还不够了解它。</span></p>
            <p><span>-- 阿尔伯特·爱因斯坦</span></p>														
        </div>
        <div className="paper">					
            <p><span className="numlabel small">1</span>
            一个数被42除，商是128，这个数是
            <span className="answer"></span>	
            </p>						
        </div>
        <div className="paper">					
            <p><span className="numlabel small">1</span>
            一个数被42除，商是128，这个数是
            <span className="answer"></span>	
            </p>						
        </div>
        <div className="paper">					
            <p><span className="numlabel small">1</span>
            一个数被42除，商是128，这个数是
            <span className="answer"></span>	
            </p>						
        </div>
        <div className="paper">					
            <p><span className="numlabel small">1</span>
            一个数被42除，商是128，这个数是
            <span className="answer"></span>	
            </p>						
        </div>
        <div className="paper">					
            <p><span className="numlabel small">1</span>
            一个数被42除，商是128，这个数是
            <span className="answer"></span>	
            </p>						
        </div>
        <div className="paper">					
            <p><span className="numlabel small">1</span>
            一个数被42除，商是128，这个数是
            <span className="answer"></span>	
            </p>						
        </div>
        <div className="paper">							
            <p><span className="numlabel small">1</span>
             天边的朝霞变浓变淡，粉红的颜色渐渐变为桔</p>
             <p>红，以后又变成鲜红了。而大海和天空也像起了火似的，
             通红一片。就在这时，在那水天融为一体的苍茫远方，
             一轮红日冉(rán)冉升起。</p>
             <p className="blank">开始时，它升得很慢，只露出一个弧(hú)
             形的金边儿。但是，这金边儿很快地扩大着，扩大着，涌了
             上来。到后来，就不是冉冉升起了，而是猛地一蹦就出了海面。
             于是那辽(liáo)阔的天空和大海，一下子就布满了耀(yào)眼的金光。
             </p>
            <div className="dashed"></div>		
            <p>1．全文有_____个自然段，“天空泛起了粉红色的霞光”是
            在第 ______ 个自然段讲到的内容。</p>  
            <p></p>  
            <p>2．全文有_____个自然段，“天空泛起了粉红色的霞光”是
            在第 ______ 个自然段讲到的内容。</p>
            <p className="margin45"></p>
        </div>
        <p className="margin70"></p>
        <Link to="/answer1" className="confirmbtn">
            <span className="green">
                进入试题
            </span>
        </Link>
        <p className="margin45"></p>
    </div> 

    );
  }
}

export default StuPageOverview;