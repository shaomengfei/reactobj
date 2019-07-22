import React from "react";
import "../assets/css/footer.css";
import {NavLink} from "react-router-dom";

class Footer extends React.Component{

  render(){
    return (
      <div className="Footer">
        <div className="footer-s">
					<NavLink to="/home" 
					className="h" 
					activeClassName="h1">
        		
        		<img src="./img/sy-on.png" />
        		<p>首页</p>
        	</NavLink>
					<NavLink to="/product" 
					className="p" 
					activeClassName="p1">
        		
        		<img src="./img/sj-on.png" />
        		<p>商家</p>
        	</NavLink>
					<NavLink to="/car" 
					className="c" activeClassName="c1">
        		
        		<img src="./img/car-on.png" />
        		<p>购物车</p>
        	</NavLink>
        	<NavLink to="/user" className="u" activeClassName="u1">
        		<img src="./img/my-on.png" />
        		<p>我的</p>
        	</NavLink>
        </div>
      </div>
    )
  }
}

export default Footer;