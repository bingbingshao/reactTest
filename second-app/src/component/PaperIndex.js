import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import PaperDetail from '../component/PaperDetail.js';
import PaperDetailAll from '../component/PaperDetailAll.js';
import PaperDetailAnswer from '../component/PaperDetailAnswer.js';
import PaperDetailAnswerAudio from '../component/PaperDetailAnswerAudio.js';
import PaperDetailAudio from '../component/PaperDetailAudio.js';
import PaperDetailWrite from '../component/PaperDetailWrite.js';
class PaperIndex extends Component {
  render() {
		var PaperDetailName=this.props.PaperDetailName
		console.log(PaperDetailName)
    return (
		<div className="paperindex">
				<div className="paperchoose">
					<span>选择大题：
						<select> 
							<option selected="selected" className="show">1</option> 
							<option>2</option> 
							<option>3</option>
						</select>	
					</span>
					<span>选择小题：
						<select> 
							<option selected="selected" className="show">1</option> 
							<option>2</option> 
							<option>3</option>
						</select>	
					</span>
					<div className="surebtn">确定</div>
				</div>
				
				<PaperDetailName/>
			
			<p>&nbsp;</p>
			<div className="confirmbtn">
				<span className="per45">
					<div className="fa fa-check"></div>
					确定
				</span>
				<span className="per45 green">
					提交
					<div className="fa fa-long-arrow-right"></div>
				</span>				
			</div>
			<p className="margin45"></p>
		</div>
    );
  }
}

export default PaperIndex;