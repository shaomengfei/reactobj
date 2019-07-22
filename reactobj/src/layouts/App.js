import React from "react";

import "../assets/css/base.css";
import "../library/font.js";

import Header from "./Header.js";
import Footer from "./Footer.js";
import {Route,Switch,Redirect,NavLink} from "react-router-dom";

import Home from "../pages/Home.js";
import Product from "../pages/Product.js";
import Detail from "../pages/Detail.js";
import Login from "../pages/Login.js";
import Reg from "../pages/Reg.js";
import User from "../pages/User.js";
import Car from "../pages/Car.js";
import ErrorPage from "../pages/ErrorPage.js";
import Loading from "../components/Loading/Loading.js";

import PubSub from "pubsub-js";
import AuthUser from "../guard/AuthUser";

class App extends React.Component{
  state={
    bNav:false,
    bFoot:true,
    bLoading:false
  }
  token = null;

  constructor(){
    super()
    this.token = PubSub.subscribe("VIEW_LOADING",(evname,paload)=>{
      console.log(evname,paload)
      this.setState({bLoading:paload})
    })
  }

  componentWillUnmount(){       //订阅用完了，要清除
    PubSub.unsubscribe(this.token)
  }

  checkPath(path){
    if(/user|product|car/.test(path)){
      this.setState({
        bNav:true,
        bFoot:true
      })
    }
    if(/home/.test(path)){
      this.setState({
        bNav:false,
        bFoot:true
      })
      if(/detail|login|reg/.test(path)){
        this.setState({
          bNav:true,
          bFoot:false
        })
      }
    }
  }


  componentWillReceiveProps(nextprops){
    
    let path = nextprops.location.pathname;
    this.checkPath(path)
  };
  componentDidMount(){
    let path = this.props.location.pathname;
    this.checkPath(path)
  }
  render(){
    return (
      <div className="App">
        {/* <Header/> */}
        {this.state.bLoading && <Loading/>}
        {this.state.bNav && <Header/>}

        {/*<NavLink to="/home">首页</NavLink>*/}
        {/*<NavLink to="/product">分类</NavLink>
        <NavLink to="/login">登录</NavLink>
        <NavLink to="/reg">注册</NavLink>
        <NavLink to="/user">用户</NavLink>*/}
        
        <Switch>
        	
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/detail" component={Detail} />
          <Route path="/reg" component={Reg} />
          <Route path="/login" component={Login} />
          <Route path="/car" component={Car} />
          {/* <Route path="/user" component={User} /> */}
          <AuthUser path="/user" component={User} />
          <Route path="/" exact component={Home} />
          <Route component={ErrorPage} />
        
        </Switch>
        
        {this.state.bFoot && <Footer/>}
      </div>
    )
  }
}

export default App;