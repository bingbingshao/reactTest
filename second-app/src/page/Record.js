import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
class Record extends Component {
	backhistory = () => {	
	  this.props&&this.props&& this.props.history.goBack()
	}
  render() {
    return (
        <div className="page">
	       <Nav NavTitle="nav noborder" backhistory={this.backhistory}
		    NavLeft="fa fa-chevron-left" NavName="视频行为记录">
				<div className="icon"></div>
			</Nav>
            <p className="margin45"></p>			
			<div className="historytype">
				<div>视频类型</div><div className="line"></div>
				<div>观看时长</div><div className="line"></div>
				<div>得分情况</div><div className="line"></div>
				<div>观看时间</div>
			</div>
			<div className="historydate">&nbsp;&nbsp;2017-01-04</div>
			<div className="historytr">
				<div>播放视频</div>
				<div id="blue1">3分20秒</div>
				<div id="red1"><b></b></div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>播放视频</div>
				<div id="blue1">3分20秒</div>
				<div id="red1"><b>88</b></div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>播放视频</div>
				<div id="blue1">3分20秒</div>
				<div id="red1"><b></b></div>
				<div>12:30</div>
			</div>
			<div className="historydate">&nbsp;&nbsp;2017-01-04</div>
			<div className="historytr">
				<div>播放视频</div>
				<div id="blue1">3分20秒</div>
				<div id="red1"><b></b></div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>播放视频</div>
				<div id="blue1">3分20秒</div>
				<div id="red1"><b>88</b></div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>播放视频</div>
				<div id="blue1">3分20秒</div>
				<div id="red1"><b></b></div>
				<div>12:30</div>
			</div>
			<div className="historydate">&nbsp;&nbsp;2017-01-04</div>
			<div className="historytr">
				<div>播放视频</div>
				<div id="blue1">3分20秒</div>
				<div id="red1"><b></b></div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>播放视频</div>
				<div id="blue1">3分20秒</div>
				<div id="red1"><b>88</b></div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>播放视频</div>
				<div id="blue1">3分20秒</div>
				<div id="red1"><b></b></div>
				<div>12:30</div>
			</div>
	</div>
    );
  }
}
export default Record;