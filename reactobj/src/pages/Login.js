import React from "react";
import "../assets/css/login.css";
import {Link} from "react-router-dom";
import axios from "../utils/axios";

class Login extends React.Component{
  state = {
    username:"",
    password:"",
    mess:""
  }
  login = ()=>{
    axios({
      url:"/mock/user",
      method:"POST",
      data:{username:this.state.usernmae,
        password:this.state.password
      }
    }).then(
      res=>{
        if(res.data.err ===0){
          this.props.history.push("/user")
        }else{
          this.setState({
            mess:"登录失败"
          })
        }
      }
    )
  }

  render(){
    return (
      <div className="Login">
        {/* <div className="head">
          <p>登录</p>
        </div> */}
        <div className="tou">
          <img src="./imag/login/head.png" />
        </div>
        <div className="form">
          <ul>
            <li>
              <input type="text" placeholder="输入用户名" 
              value={this.state.username}
              onChange={(ev)=>this.setState({username:ev.target.value})}
              />
            </li>
            <li>
              <input type="text" placeholder="输入密码"
              value={this.state.password}
              onChange={(ev)=>this.setState({password:ev.target.value})}
              />
            </li>
            <li>
              <a href="javascript:;">忘记密码？</a>
              <Link to="/reg">账号注册</Link>
            </li>
            <li>
              <input type="button" value="登录" className="btn"
              onClick={this.login}
              />
            </li>
          </ul>
        </div>
        <div className="dl">
          <h3>第三方登录</h3>
          <img src="./imag/login/icon1.png" />
          <img src="./imag/login/icon2.png" />
          <img src="./imag/login/icon3.png" />
          
        </div>
        <div>
          
        </div>
      </div>
    )
  }
}

export default Login;