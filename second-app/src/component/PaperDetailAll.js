import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
class PaperDetailAll extends Component {
    constructor(){
		super()
		this.state={heartshow:'fa fa-heart-o',ifshow:true,
        tipclass:'textb2-14 longarticle',tipname:'展开全文',ifopen:true}
	}

	heartclick=(e)=>{
		this.state.ifshow=!this.state.ifshow
		if(this.state.ifshow){
			this.setState({heartshow:'fa fa-heart-o'})
		}else{
			this.setState({heartshow:'fa fa-heart'})
		}
	}

    clickOpentip=()=>{
        this.state.ifopen=!this.state.ifopen
		if(this.state.ifopen){
			this.setState({tipclass:'textb2-14 longarticle',tipname:'展开全文'})
		}else{
			this.setState({tipclass:'textb2-14 showlongarticle',tipname:'收起'})
		}
	}
  render() {
    return (
        <div className="mod">
            <div className="submod thick">
                <div className="content heart">
                    <div className="listtitle">
                        <span className="textb1-14">五、阅读理解</span>
                    </div>						
                    <div className="heartclick" onClick={this.heartclick}>
                        <span className={this.state.heartshow}></span>
                    </div>
                    <div className={this.state.tipclass}>					
                        <p className="blank">天边的朝霞变浓变淡，粉红的颜色渐渐变为桔
                        红，以后又变成鲜红了。而大海和天空也像起了火似的，通红一片
                        。就在这时，在那水天融为一体的苍茫远方，一轮红日冉(rán)冉
                        升起。</p>
                        <p className="blank">开始时，它升得很慢，只露出一个弧(hú)形的
                        金边儿。但是，这金边儿很快地扩大着，扩大着，涌了上来。到
                        后来，就不是冉冉升起了，而是猛地一蹦就出了海面。于是那辽
                        (liáo)阔的天空和大海，一下子就布满了耀(yào)眼的金光。</p>
                        <p className="blank">天边的朝霞变浓变淡，粉红的颜色渐渐变为桔
                        红，以后又变成鲜红了。而大海和天空也像起了火似的，通红一片
                        </p>
                        <p className="blank">天边的朝霞变浓变淡，粉红的颜色渐渐变为桔
                        红，以后又变成鲜红了。而大海和天空也像起了火似的，通红一片
                        。就在这时，在那水天融为一体的苍茫远方，一轮红日冉(rán)冉
                        升起。</p>
                        <p className="blank">开始时，它升得很慢，只露出一个弧(hú)形的
                        金边儿。但是，这金边儿很快地扩大着，扩大着，涌了上来。到
                        后来，就不是冉冉升起了，而是猛地一蹦就出了海面。于是那辽
                        (liáo)阔的天空和大海，一下子就布满了耀(yào)眼的金光。</p>
                        <p className="blank">天边的朝霞变浓变淡，粉红的颜色渐渐变为桔
                        红，以后又变成鲜红了。而大海和天空也像起了火似的，通红一片
                        </p>						   
                    </div>
                    <p className="clickopen" onClick={this.clickOpentip}>
                        {this.state.tipname}
                    </p>
                   
                </div>
            </div>
            <div className="submod">
                <div className="content">
                    <div className="contenttext textb2-14">					
                        <p>1．全文有_____个自然段，“天空泛起了粉红
                        色的霞光”是在第 ______ 个自然段讲到的内容。</p>			  		   
                    </div>
                    <div className="paperinfo noshadow">
                        <span>1、学生的答案</span>			
                    </div>
                    <div className="paperinfo noshadow">
                        <span>2、学生的答案</span>			
                    </div>
                    <div className="paperinfo">
                        <span className="blue">得分：</span>
                        <input type="text" placeholder="输入得分" ></input>
                    </div>
                    <div className="paperinfo">
                        <span className="blue">评价：</span>
                        <input type="text" placeholder="输入评语" ></input>
                    </div>
                </div>
            </div>	
            <div className="submod">
                <div className="content">
                    <div className="contenttext textb2-14">					
                        <p>1．全文有_____个自然段，“天空泛起了粉红
                        色的霞光”是在第 ______ 个自然段讲到的内容。</p>			  		   
                    </div>
                    <div className="paperinfo noshadow">
                        <span className="textb2-14">A、宫爆鸡丁</span>			
                    </div>
                    <div className="paperinfo noshadow">
                        <span className="textb2-14">B、宫爆鸡丁</span>			
                    </div>
                    <div className="paperinfo noshadow">
                        <span className="textb2-14">C、宫爆鸡丁</span>			
                    </div>
                    <div className="paperinfo"><span>答案：A</span></div>
                    <div className="paperinfo">
                        <span className="blue">得分：</span>
                        <input type="text" placeholder="输入得分" ></input>
                    </div>
                    <div className="paperinfo">
                        <span className="blue">评价：</span>
                        <input type="text" placeholder="输入评语" ></input>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default PaperDetailAll;