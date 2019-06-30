import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import BottomIndexMic from '../component/BottomIndexMic.js';
import BottomIndexNews from '../component/BottomIndexNews.js';
import BottomIndexBook from '../component/BottomIndexBook.js';
import BottomIndexVideo from '../component/BottomIndexVideo.js';
import BottomIndexMy from '../component/BottomIndexMy.js';
import BottomMenu from '../component/BottomMenu.js';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

class News extends Component {
  render() {
    return (
      <div className="page">
          <Route path="/news/microweb" component={BottomIndexMic}/>
          <Route exact path="/news" component={BottomIndexNews}/>
          <Route path="/news/book" component={BottomIndexBook}/>
          <Route path="/news/video" component={BottomIndexVideo}/>
          <Route path="/news/my" component={BottomIndexMy}/>
          <BottomMenu/>
      </div>
    );
  }
}

export default News;
