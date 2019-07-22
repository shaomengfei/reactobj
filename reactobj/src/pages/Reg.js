import React from "react";
import "../assets/css/reg.css";
import {Link} from "react-router-dom";
import axios from "../utils/axios";

class Reg extends React.Component{
  state={
    username:'',
    password:'',
    mess:''
  };
  reg = ()=>{
    axios({
      url:"/mock/reg",
      method:"POST",
      data:{username:this.setState.username,
      password:this.setState.password
      }
    }).then(
      res=>{
        if(res.data.err===0){
          this.props.history.push("/login")
        }else{
          this.setState({
            mess:"注册失败"
          })
        }
      }
    )
  }
  render(){
    return (
      <div className="Reg">
        <div className="head">
          <p>注册</p>
        </div>
        <div className="tx">
          <ul>
            <li>
              <input type="text" placeholder="请输入用户名"
              value={this.state.username}
              onChange={(ev)=>this.setState({
                username:ev.target.value
              })}
               />
            </li>
            <li>
              <input type="text" placeholder="请输入密码" 
              value={this.state.password}
              onChange={(ev)=>this.setState({
                password:ev.target.value
              })}
              />
            </li>
            <li>
              <Link to="/login">有账号，去登录</Link>
            </li>
            <li>
              {this.state.mess}
            </li>
            <li>
              <input type="button" value="完成" className="btn"
              onClick={this.reg}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Reg;