import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
class  Teacherdetail extends Component {
	backhistory = () => {	
	  this.props&&this.props&& this.props.history.goBack()
	}
  render() {
    return (
      <div className="page">
				<Nav NavTitle="nav border" backhistory={this.backhistory} NavLeft="fa fa-chevron-left" NavName="刘雄华老师">
            <div className="icon"></div>
				</Nav>
			<p className="margin45"></p>
			<div className="content">
				<img src={require("../css/image/teacher2.jpeg")} className="contentimg" alt="加载失败"/>
				<div className="contenttext textb2-14">					
				   <span><p>1986年7月参加工作，</p></span>		
				   <span><p>1992年11月加入中国共产党，大学文化。</p></span>
				   <span><p>1986年7月至1993年10月新化县税务局科员；</p></span>
				   <span><p>1993年10月至1994年9月新化县税务局科员；</p></span>
				   <span><p>1994年9月至1995年1月新化县国家税务局科员；</p></span>
				   <span><p>1995年1月至1995年9月新化县国家税务局炉观税务所副所长；</p></span>
				   <span><p>1995年9月至1997年6月新化县国家税务局琅塘征收分局局长；</p></span>
				   <span><p>1997年7月至1999年1月新化县国家税务局田坪征收分局局长；</p></span>
				   <span><p>1999年2月至1999年9月新化县国家税务局兴达税务师事务所所长；</p></span>
				   <span><p>1999年10月至2001年5月新化县国家税务局稽查局党支部书记；</p></span>
				   <span><p>2001年6月至2005年5月新化县国家税务局温塘税务所所长；</p></span>
				   <span><p>2005年5月至2007年7月新化县国家税务局综合业务科科长；</p></span>
				   <span><p>2007年8月至2010年2月新化县国家税务局税政法规科科长；</p></span>
				   <span><p>2010年3月至今任新化县国家税务局党组成员、副局长</p></span>
				</div>
			</div>
		</div>
    );
  }
}

export default Teacherdetail;