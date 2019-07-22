import React from "react";
import List from "../components/List/List.js";
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router-dom';
import '../assets/css/home.css';
import axios from "../utils/axios";

class Home extends React.Component{

	state={
		lis:[]
	}
	componentDidMount(){
		axios({
			url:'/mock/home',
			params:{_page:1,_limit:10}
		}).then(
			// res=>this.setState({lis:res.data.page_data})
			res=>this.setState({lis:res.data.data})
			// res=>console.log(res.data.page_data)
		)
	}
  render(){
		let {lis} = this.state;
		
    return (
      <div className="Home">
				<div className="header">
					<img src="./img/fh.png" />
					<input type="text" placeholder="输入商家、品类、商圈" />
					<img src="./img/xx.png" />
				</div>
        <ReactSwipe
        	className="carousel"
        	swipeOptions={{
            auto: 2000,
            speed: 300
          }}
      	>
	        <Link to="/detail"><img src="./img/banner1.jpg" /></Link>
	        <Link to="/detail"><img src="./img/banner2.jpg" /></Link>
	        <Link to="/detail"><img src="./img/banner3.jpg" /></Link>
      	</ReactSwipe>
      	
      	
      	<div className="list">
      		<ul>
      			<li>
      				<img src="images/index_logo_01.jpg" />
      				<p>美食</p>
      			</li>
      			<li>
      				<img src="images/index_logo_02.jpg" />
      				<p>电影</p>
      			</li>
      			<li>
      				<img src="images/index_logo_03.jpg" />
      				<p>酒店</p>
      			</li>
      			<li>
      				<img src="images/index_logo_04.jpg" />
      				<p>休闲娱乐</p>
      			</li>
      			<li>
      				<img src="images/index_logo_05.jpg" />
      				<p>外卖</p>
      			</li>
      		</ul>
      		<ol>
      			<li>
      				<img src="images/index_logo_06.jpg" />
      				<p>自助餐</p>
      			</li>
      			<li>
      				<img src="images/index_logo_07.jpg" />
      				<p>KTV</p>
      			</li>
      			<li>
      				<img src="images/index_logo_08.jpg" />
      				<p>火车票机票</p>
      			</li>
      			<li>
      				<img src="images/index_logo_09.jpg" />
      				<p>小吃快餐</p>
      			</li>
      			<li>
      				<img src="images/index_logo_10.jpg" />
      				<p>美容美体</p>
      			</li>
      		</ol>
      	</div>
      	
      	
      	<div className="lib">
      		<div className="libhead">
      			<img src="/images/mer_logo_area.png" />
      			
      			<span>查看更多></span>
      		</div>
        </div>
        <div className="listAll">
        {/* <List/> */}
					{
						lis.map(item=>(
						<List
							key={item.id}
							data={item}
							dataName="home"
						/>
					))
				}
        </div>
        
      </div>
    )
  }
}

export default Home;