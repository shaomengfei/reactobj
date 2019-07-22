import React from "react";
import "../assets/css/car.css"


class Car extends React.Component{

  render(){
    return (
      <div className="Car">
        <div className="sp">
          <img src="./images/orl_produce_img.jpg" />
          <p>清风原木纯品抽纸3层16包家用卫生纸餐巾婴儿面巾纸家庭装..</p>
          <input type="number"/>
        </div>
      </div>
    )
  }
}

export default Car;