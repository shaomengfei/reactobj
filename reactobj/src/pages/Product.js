import React from "react";
import List from "../components/List/List.js"
import axios from "../utils/axios.js";


class Product extends React.Component{
  state={
    lis:[]
  }
  componentDidMount(){
    axios({
      url:"/mock/product",
      params:{_page:1,_limit:12}
    }).then(
      res=>this.setState(
        {lis:res.data.data}
      )
    )
  }
  render(){
    return (
      <div className="Product">
        {
          this.state.lis.map(item=>(
            <List
              key={item.id}
              data={item}
              dataName="home"
            />
          ))
        }
      </div>
    )
  }
}

export default Product;