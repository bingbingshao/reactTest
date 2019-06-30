import React, { Component } from 'react';
import '../css/index.css';
import '../css/font1/css/font-awesome.min.css';

class NewsPicture extends Component {
    constructor(){
        super();
        this.state={pos:0};		
        this.interval=0;
        this.hotnewsimg=[{src:require("../css/image/newsimg1.jpeg"),title:'俄罗斯驻土耳其大使参观展览时被枪杀'},
                    {src:require("../css/image/newsimg2.jpeg"),title:'【年终特刊】2016这些自然美图震撼你的心灵'},
                    {src:require("../css/image/newsimg3.jpeg"),title:'山东滨州发雾霾“红警”地库成健身房'},
                    {src:require("../css/image/newsimg4.jpeg"),title:'济南“密集阵”80米长道路设300个隔离柱'}]
    }	

    componentDidMount(){
        this.clock();
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    clock(){
        this.interval=setInterval(()=>{
            this.state.pos++;
            var	pos = this.state.pos%this.hotnewsimg.length;
            this.setState({pos:pos});
        },2000);
    }

    mouseenter=(e)=>{
        clearInterval(this.interval);
    }

    mouseleave=(e)=>{
        this.clock();
    }

  render() {
    return (         
        <div className="hotnewsimg" onMouseEnter={this.mouseenter} onMouseLeave={this.mouseleave}>
            {
                this.hotnewsimg.map((info,i)=>{
                    if(this.state.pos==i){
                        return(<img src={info.src} alt="加载失败" className='show' key={i}></img>);
                    }else{
                        return(<img src={info.src} alt="加载失败" key={i}></img>);
                    }
                })
            }
            <div className="hotnewstitle">
                {
                    this.hotnewsimg.map((info,i)=>{
                        if(this.state.pos==i){
                            return(<div className='show'>{info.title}</div>);
                        }else{
                            return(<div>{info.title}</div>);
                        }
                    })
                }		
            </div>
        </div>				
       );
  }
}

export default NewsPicture;