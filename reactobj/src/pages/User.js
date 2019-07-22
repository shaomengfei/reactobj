import React from "react";
import "../assets/css/user.css";
import {Link,Route} from
'react-router-dom';


class User extends React.Component{
  
  render(){
    
    // let {data:{nikename}}=this.props.data; 

    return (
      <div className="User">
        <div className="u-h">
          <img src="./mine/head.png" />
          {/* <img src={icon} /> */}
          <p>hh</p>
        </div>
        <div className="u-c">
          <ul>
            <li>
              <img src="./mine/icon1.png" />
              <span>我的项目</span>
              <u></u>
            </li>
            <li>
            <img src="./mine/icon2.png" />
              <span>我的订单</span>
              <u></u>
            </li>
            <li>
            <img src="./mine/icon3.png" />
              <span>我的明细</span>
              <u></u>
            </li>
            <li>
            <img src="./mine/icon4.png" />
              <span>我的优惠券</span>
              <u></u>
            </li>
          </ul>
          <div className="del">
              <Link to="/login">
                <input type="button" value="退出" />
              </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default User;