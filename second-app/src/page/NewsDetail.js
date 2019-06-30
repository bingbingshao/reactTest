import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import NewsMap from '../component/NewsMap.js';
import NewsArticle from '../component/NewsArticle.js';
import NewsArticle2 from '../component/NewsArticle2.js';
import NewsAudio from '../component/NewsAudio.js';
import NewsVideo from '../component/NewsVideo.js';
import Nav from '../component/Nav.js';
import {
  Link,  
} from 'react-router-dom';
class NewsDetail extends Component {
  render() {
    return (
      <div className="page">	
				<Nav NavTitle="nav border" back={this.props} backto="/order" NavLeft="fa fa-chevron-left" NavName="新闻资讯频道">
					<Link to="alreadyorder" className="icon">
						<div className="fa fa-cog"></div>
					</Link>
				 </Nav>
				<p className="margin45"></p>
				<div className="search">
					<div className="fa fa-search"></div>
					<input type="text" placeholder="搜索"></input>
				</div>
				<NewsArticle/>					
				<NewsArticle2/>
				<NewsMap/>
				<NewsAudio/>
				<NewsVideo/>			
				<p className="margin45"></p>
		</div>
    );
  }
}

export default NewsDetail;
