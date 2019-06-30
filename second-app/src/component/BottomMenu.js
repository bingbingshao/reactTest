import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import {
    NavLink
} from 'react-router-dom'
class BottomMenu extends Component {
  render() {
    return (			
        <div className="bottommenu">
            <NavLink to="/news/microweb" className="bottommenuitem" activeClassName="bottommenuitem show">				
                <div className="fa fa-globe"></div>					
                <div className="textb2-14">微官网</div>
            </NavLink>
            <NavLink exact to="/news" className="bottommenuitem" activeClassName="bottommenuitem show">			
                <div className="fa fa-list-ul"></div>					
                <div className="textb2-14">新闻</div>
            </NavLink>
            <NavLink to="/news/book" className="bottommenuitem" activeClassName="bottommenuitem show">
                <div className="fa fa-book"></div>
                <div className="textb2-14">书架</div>
            </NavLink>
            <NavLink to="/news/video" className="bottommenuitem" activeClassName="bottommenuitem show">
                <div className="fa fa-video-camera"></div>
                <div className="textb2-14">视频</div>
            </NavLink>           
            <NavLink to="/news/my" className="bottommenuitem" activeClassName="bottommenuitem show">
                <div className="fa fa-user-o"></div>
                <div className="textb2-14">我的</div>
            </NavLink>
        </div>
    );
  }
}

export default BottomMenu;
