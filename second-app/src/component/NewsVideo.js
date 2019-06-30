import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';

class NewsVideo extends Component {
  render() {
    return (  
            <div className="submod">
                <video controls="controls">
                    <source/>
                </video>
                <div className="cell">
                    <div className="cellnote">
                        <div>上海交通大学新闻部</div>
                        <div>2017-7-12&nbsp;12:00</div>
                    </div>
                    <div className="cellnote">
                        <div className="fa fa-eye"></div>
                        <div>1024次</div>
                    </div>
                </div>
            </div>               						
     );
  }
}

export default NewsVideo;