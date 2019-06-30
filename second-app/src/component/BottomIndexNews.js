import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import NewsMap from '../component/NewsMap.js';
import NewsPicture from '../component/NewsPicture.js';
import NewsArticle from '../component/NewsArticle.js';
import NewsArticle2 from '../component/NewsArticle2.js';
import NewsAudio from '../component/NewsAudio.js';
import NewsVideo from '../component/NewsVideo.js';
import {Link} from 'react-router-dom';

class BottomIndexNews extends Component {
	constructor(){
		super();
		this.state={pos:0}
		this.topmenuitem=[{name:'最新'},
		{name:'家教'},{name:'培训'},
		{name:'社会'},{name:'科技'},{name:'教育'}]
	}
	clickMenuitem=(e)=>{
		var pos = e.target.getAttribute('data-key');
		this.setState({pos:pos});
	}
  render() {
    return (         
            <div className="bottomindex">
				<Nav NavTitle="nav noborder" NavName="上海交通大学" NavRight="textb2-14" >
					<Link to="/order" className="icon">
						<div className="textb2-14">订阅</div>
					</Link>	
				</Nav>
				<p className="margin45"></p>
				<div className="topmenu"onClick={this.clickMenuitem}>
					{
						this.topmenuitem.map((name,i)=>{
							if(this.state.pos==i){
								return(<div className="topmenuitem show" data-key={i} key={i}>{name.name}</div>)
							}else{
								return(<div className="topmenuitem" data-key={i} key={i}>{name.name}</div>)
							}
						})
					}
				</div>
				<div className="newsindex">
					<NewsPicture/>		
					<div className="mod">					
						<Link to="/picture"><NewsArticle/></Link>					
						<Link to="/picture"><NewsArticle2/></Link>
						<Link to="/map"><NewsMap/></Link>
						<Link to="/audio"><NewsAudio/></Link>
						<Link to="/video"><NewsVideo/></Link>
					</div>
					<p className="margin70"></p>
					<p className="margin70"></p>
					<p className="margin70"></p>	
				</div>				
			</div>
         );
  }
}

export default BottomIndexNews;