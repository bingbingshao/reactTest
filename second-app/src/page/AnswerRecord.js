import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
class AnswerRecord extends Component {
	backhistory = () => {	
	  this.props&&this.props&& this.props.history.goBack()
	}
  render() {
    return (
        <div className="page">
		   <Nav NavTitle="nav noborder" backhistory={this.backhistory} NavLeft="fa fa-chevron-left" NavName="答题记录">
				<div className="icon"></div>
			</Nav>
			 <p className="margin45"></p>	
			<div className="historytype">
				<div>答题类型</div><div className="line"></div>
				<div>思考时间</div><div className="line"></div>
				<div>答题情况</div><div className="line"></div>
				<div>答题时间</div>
			</div>
			<div className="historydate">&nbsp;&nbsp;2017-01-04</div>
			<div className="historytr">
				<div>作业</div>
				<div id="blue1">3分20秒</div>
				<div id="red1">错误</div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>作业</div>
				<div id="blue1">3分20秒</div>
				<div id="red1">错误</div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>订正</div>
				<div id="blue1">3分20秒</div>
				<div id="green1">正确</div>
				<div>12:30</div>
			</div>
			<div className="historydate">&nbsp;&nbsp;2017-01-04</div>
			<div className="historytr">
				<div>作业</div>
				<div id="blue1">3分20秒</div>
				<div id="red1">错误</div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>作业</div>
				<div id="blue1">3分20秒</div>
				<div id="red1">错误</div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>订正</div>
				<div id="blue1">3分20秒</div>
				<div id="green1">正确</div>
				<div>12:30</div>
			</div>
			<div className="historydate">&nbsp;&nbsp;2017-01-04</div>
			<div className="historytr">
				<div>作业</div>
				<div id="blue1">3分20秒</div>
				<div id="red1">错误</div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>作业</div>
				<div id="blue1">3分20秒</div>
				<div id="red1">错误</div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>订正</div>
				<div id="blue1">3分20秒</div>
				<div id="green1">正确</div>
				<div>12:30</div>
			</div>
			<div className="historydate">&nbsp;&nbsp;2017-01-04</div>
			<div className="historytr">
				<div>作业</div>
				<div id="blue1">3分20秒</div>
				<div id="red1">错误</div>
				<div>12:30</div>
			</div>
			<div className="historytr">
				<div>作业</div>
				<div id="blue1">3分20秒</div>
				<div id="red1">错误</div>
				<div>12:30</div>
			</div>	
			<p className="margin45"></p>
		</div>
    );
  }
}
export default AnswerRecord;