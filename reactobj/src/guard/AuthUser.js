// import React from 'react';
// import {Route, Redirect} from 'react-router-dom'
// import User from "../pages/User";

// import axios from 'axios';


/*
class AuthUser extends React.Component{
  constructor(){
    super();

    this.state={
      hasAuth:false,//是否发送过授权请求
      auth:false,//授权结果
    };

    //axios
    axios({
      url:'/data/user.json'
    }).then(
      res=>{
        // setTimeout(()=>this.setState({hasAuth:true,auth:res.data.auth}),2000)
        this.setState({hasAuth:true,auth:res.data.auth})
      }
    )
  }
  render(){
    if (!this.state.hasAuth) return null;

    let el = null;
    if ( this.state.auth){
      el = <Route path="/user" component={User} />;
    }else{
      el = <Redirect to="/login" />;
    }
    return el
  }
}
*/


// class AuthUser extends React.Component{
//   constructor(){
//     super();

//     this.state={
//       hasAuth:false,//是否发送过授权请求
//       error:1,//授权结果
//       data:{}
//     };

//     //axios
//     axios({
//       url:'/mock/user'
//     }).then(
//       res=>this.setState({hasAuth:true,error:res.data.error,data:res.data.data})
//       // res=>console.log(res)
//     )
//   }
//   render(){
//     if (!this.state.hasAuth) return null;

//     let {component:Component, ...rest} = this.props;

//     return <Route {...rest} render={(rest)=>(
//       this.state.error===0 ? <Component {...rest} data={this.state.data} /> : <Redirect to="/login"/>
//     )} />
//   }
// }
// export default AuthUser;

import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import User from "../pages/User";
import axios from 'axios';

class AuthUser extends React.Component{
  constructor(){
    super();

    this.state={
      hasAuth:false,//是否发送过授权请求
      err:1,//授权结果
      data:{}
    };

    //axios
    axios({
      url:'/mock/user'
    }).then(
      res=>{this.setState({hasAuth:true,err:res.data.err,data:res.data.data}
      )
      }
    )
  }
  render(){
    if (!this.state.hasAuth) return null;

    let {component:Component, ...rest} = this.props;

    return <Route {...rest} render={(rest)=>(
      this.state.err === 0 ? <Component {...rest} data={this.state.data} /> : <Redirect to="/login"/>
    )} />
  }
}
export default AuthUser;