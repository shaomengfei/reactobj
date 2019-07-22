import React from "react";
import {Link} from 'react-router-dom'
import "./css/list.css";


class List extends React.Component{

	render(){
		let {data,dataName} = this.props;
		return (
      		<div className="first">
      			<Link className="second"
							to={{pathname:'/detail/',search:`dataName=${dataName}`}}
						>
      				<img className="b1" src="/images/mer_shop_logo.png"/>
      				<div className="title">
      					<h3>
								{data.title}
								</h3>
      					<p>
      						<img src="/images/mer_logo_area.png" />
									{data.des}
      					</p>
      					
      					<h5 className="hh">
      						<img src="/images/mer_logo_te.png" />
      						共有361个特价商品
      					</h5>
      					<h5>
      						<img src="images/mer_logo_fan.png"/>
      						全店85折,享受平台返利
      					</h5>
      					<h6>
      						<img src="images/mer_logo_you.png" />
      						全店85折,享受平台返利
      					</h6>
      				</div>
      				<div className="right">
      					<div className="tu">
      						<img src="/images/mer_logo_phone.jpg"/>
      						<img src="/images/mer_logo_message.jpg"/>
      					</div>
      					<div className="xin">
      						<p>
      							店铺评价：
      							<em>385人</em>
      						</p>
      						<p>
      							<img src="/images/star-on.png"/>
      							<img src="/images/star-on.png"/>
      							<img src="/images/star-on.png"/>
      							<img src="/images/star-off.png"/>
      							<img src="/images/star-off.png"/>
      						</p>
      					</div>
      				</div>
      			</Link>
      		</div>
      	
		
		)
	}
	
}
export default List; 