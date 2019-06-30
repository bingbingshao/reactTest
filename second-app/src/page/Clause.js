import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';
import Nav from '../component/Nav.js';
class Clause extends Component {
  render() {
    return (
        <div className="page">
        <Nav NavTitle="nav border" back={this.props} backto="/setting" NavLeft="fa fa-chevron-left" NavName="条款">
            <div className="icon"></div>
        </Nav>
        <p className="margin45"></p>
        <div className="content">				
            <div className="contenttext textb2-14">					
               <span><p className="blank">1、为了进一步掀起学习、
               遵守、贯彻、维护党章、廉洁自律准则和纪律处分
               条例教育活动的高潮，践行“两学一做”，使广大党
               员更加全面、准确、深入地学习、党章、廉洁自律
               准则和纪律处分条例，进一步增强监督意识和纪律观
               念，2016年11月29日中午，我院教工党支部在学院会
               议室开展了学习党章知识竞赛活动。</p></span>
                <span><p className="blank">2、为了进一步掀起学习、
               遵守、贯彻、维护党章、廉洁自律准则和纪律处分
               条例教育活动的高潮，践行“两学一做”，使广大党
               员更加全面、准确、深入地学习、党章、廉洁自律
               准则和纪律处分条例，进一步增强监督意识和纪律观
               念，2016年11月29日中午，我院教工党支部在学院会
               议室开展了学习党章知识竞赛活动。</p></span>	
               <span><p className="blank">3、为了进一步掀起学习、
               遵守、贯彻、维护党章、廉洁自律准则和纪律处分
               条例教育活动的高潮，践行“两学一做”，使广大党
               员更加全面、准确、深入地学习、党章、廉洁自律
               准则和纪律处分条例，进一步增强监督意识和纪律观
               念，2016年11月29日中午，我院教工党支部在学院会
               议室开展了学习党章知识竞赛活动。</p></span>	
            </div>			
        </div>
        <p className="margin70"></p>
        <p className="margin70"></p>
        <p className="margin70"></p>
    </div>

    );
  }
}

export default Clause;