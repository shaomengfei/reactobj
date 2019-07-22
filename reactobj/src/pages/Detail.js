import React from "react";
import {NavLink} from 'react-router-dom';
import ReactSwipe from 'react-swipe';
import "../assets/css/detail.css"
import List from "../components/List/List";
import querystring from 'query-string'
class Detail extends React.Component{
  state={
    lis:[]
  }
  componentDidMount(){
  
    axios({
      url:`/mock/detail`,
      params:{_page:1,_limit:1}
    }).then(
      res => this.setState({lis:res.data.data})
    )
  }
  render(){
    return (
      <div className="Detail">
        <ReactSwipe
        	className="del"
        	swipeOptions={{
            auto: 2000,
            speed: 300
          }}
      	>
          <img src="./images/proinfo_banner_01.jpg" />
          <img src="./images/proinfo_banner_01.jpg" />
          <img src="./images/proinfo_banner_01.jpg" />
        </ReactSwipe>
          <h3>
            Swisse 液体胶原蛋白 500ml瓶
          </h3>
          <p>
            <i>￥158.00</i>
            <s>￥199.00</s>
          </p>
          <div className="xx">
            <span>已售：</span><i>354件</i>
            <span>库存：</span><i>500件</i>
            <span>评价</span><i>361人</i>
          </div>
          {/* <List/> */}
          {
           this.state.lis.map(item=>(
            <List
              key={item.id}
              data={item}
              dataName="home"
            />
          )) 
          }
          <div className="xuanx">
            <ul>
              <li>商品详情</li>
              <li>更多评价（208）</li>
            </ul>
          </div>
          <div className="tup">
            <img src="./images/mer_cont_img.jpg" />
          </div>
          <div className="foot">
            <div className="left">
              {/* <NavLink to="/product">
              
                <img src="./img/sj.png" />
                <p>商家</p>
              </NavLink>
              <NavLink to="/car">
                <img src="./img/car.png" />
                <p>购物车</p>
              </NavLink> */}
            </div>
            <div className="right">

            </div>

          </div>
      </div>
    )
  }
}

export default Detail;