import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import{
	Link
}from 'react-router-dom'
class BookMenu extends Component {
  render() {
    return (   		
        <div className="bookmenu">			    
            <Link to="/bookdetail" className="bookmenuitem">
                <img src={require("../css/image/book1.jpeg")}/>
                <div>二年级下册</div>
                <div>语文</div>
            </Link>				
            <Link to="/bookdetail" className="bookmenuitem">
                <img src={require("../css/image/book1.jpeg")}/>
                <div>二年级下册</div>
                <div>语文</div>
            </Link>				
            <Link to="/bookdetail" className="bookmenuitem">
                <img src={require("../css/image/book1.jpeg")}/>
                <div>二年级下册</div>
                <div>语文</div>
            </Link>				
            <Link to="/bookdetail" className="bookmenuitem">
                <img src={require("../css/image/book2.jpeg")}/>
                <div>二年级下册</div>
                <div>语文</div>
            </Link>				
            <Link to="/bookdetail" className="bookmenuitem">
                <img src={require("../css/image/book2.jpeg")}/>
                <div>二年级下册</div>
                <div>语文</div>
            </Link>			
            <Link to="/bookdetail" className="bookmenuitem">
                <img src={require("../css/image/book2.jpeg")}/>
                <div>二年级下册</div>
                <div>语文</div>
            </Link>
        
            <Link to="/bookdetail" className="bookmenuitem">
                <img src={require("../css/image/book3.jpeg")}/>
                <div>二年级下册</div>
                <div>语文</div>
            </Link>
        
            <Link to="/bookdetail" className="bookmenuitem">
                <img src={require("../css/image/book3.jpeg")}/>
                <div>二年级下册</div>
                <div>语文</div>
            </Link>
        
            <Link to="/bookdetail" className="bookmenuitem">
                <img src={require("../css/image/book3.jpeg")}/>
                <div>二年级下册</div>
                <div>语文</div>
            </Link>
        
            <Link to="/bookdetail" className="bookmenuitem">
                <img src={require("../css/image/book4.jpeg")}/>
                <div>二年级下册</div>
                <div>语文</div>
            </Link>
        
            <Link to="/bookdetail" className="bookmenuitem">
                <img src={require("../css/image/book4.jpeg")}/>
                <div>二年级下册</div>
                <div>语文</div>
            </Link>
        
            <Link to="/bookdetail" className="bookmenuitem">
                <img src={require("../css/image/book4.jpeg")}/>
                <div>二年级下册</div>
                <div>语文</div>
            </Link>				
        </div>
    );
  }
}

export default BookMenu;