import {createStore} from "redux";  //从redux里解出createStore
import reducer from "./reducer";    //引入组件
import state from "./state";        //引入组件

let store = createStore(reducer,state);   //创建store对象
export default store;


