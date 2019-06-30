import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
import {Link} from 'react-router-dom'
class ClassChart  extends Component {
  render() {
    return (
        <div className="page">
	       <Nav NavTitle="nav noborder" back={this.props} backto="/worklist" 
		   NavLeft="fa fa-chevron-left" NavName="班级列表">
		   		<Link to="classtestcount" class="icon">
					<div className="textb2-14" id="blue1">统计</div>
				</Link>	
			</Nav>
			<p className="margin45"></p>	
			<div className="diagramnote">
				<div className="rect red"></div>
				<span>通过</span>
				<div className="rect green"></div>
				<span>努力</span>
				<div className="rect blue"></div>
				<span>进行</span>
			</div>
			<div className="diagramlist">
				<div className="diagramlistitem">
					<span>姓名</span>
					<div>
						<p>第一题（xx分）</p>
						<p>正确率0.00%</p>
					</div>
					<div>
						<p>第二题（xx分）</p>
						<p>正确率0.00%</p>
					</div>
					<div>
						<p>第三题（xx分）</p>
						<p>正确率0.00%</p>
					</div>
					<div>
						<p>第四题（xx分）</p>
						<p>正确率0.00%</p>
					</div>
					<div>
						<p>第五题（xx分）</p>
						<p>正确率0.00%</p>
					</div>
					<div>
						<p>第六题（xx分）</p>
						<p>正确率0.00%</p>
					</div>
					<div>
						<p>第七题（xx分）</p>
						<p>正确率0.00%</p>
					</div>
					<div>
						<p>第八题（xx分）</p>
						<p>正确率0.00%</p>
					</div>
					<div>
						<p>第九题（xx分）</p>
						<p>正确率0.00%</p>
					</div>
					<div>
						<p>第十题（xx分）</p>
						<p>正确率0.00%</p>
					</div>
					<p>查看</p>
				</div>
				<div className="diagramlistitem">
					<span>毛小方</span>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<p id="blue1"><b>已批改</b></p>
				</div>
				<div className="diagramlistitem">
					<span>毛小方</span>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<p id="blue1"><b>已批改</b></p>
				</div>
				<div className="diagramlistitem">
					<span>毛小方</span>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<p id="blue1"><b>已批改</b></p>
				</div>
				<div className="diagramlistitem">
					<span>毛小方</span>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<p id="blue1"><b>已批改</b></p>
				</div>
				<div className="diagramlistitem">
					<span>毛小方</span>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<p id="blue1"><b>已批改</b></p>
				</div>
				<div className="diagramlistitem">
					<span>毛小方</span>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<p id="blue1"><b>已批改</b></p>
				</div>
				<div className="diagramlistitem">
					<span>毛小方</span>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<p id="blue1"><b>已批改</b></p>
				</div>
				<div className="diagramlistitem">
					<span>毛小方</span>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<p id="blue1"><b>已批改</b></p>
				</div>
				<div className="diagramlistitem">
					<span>毛小方</span>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<p id="blue1"><b>已批改</b></p>
				</div>
				<div className="diagramlistitem">
					<span>毛小方</span>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<p id="blue1"><b>已批改</b></p>
				</div>
				<div className="diagramlistitem">
					<span>毛小方</span>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<p id="blue1"><b>已批改</b></p>
				</div>
				<div className="diagramlistitem">
					<span>毛小方</span>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect red"></div>
					</div>
					<div>
						<div className="rect green"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<div>
						<div className="rect blue"></div>
					</div>
					<p id="blue1"><b>已批改</b></p>
				</div>
			</div>
		</div>
    );
  }
}
export default ClassChart;