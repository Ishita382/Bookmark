import { put, takeLatest } from "redux-saga/effects";
import { GET_ME_REQUEST, GET_ME_FAILURE, GET_ME_SUCCESS } from "../Actions/constant";
import send_request from "../Request";

//const getMeApi = "https://bookmarks-app-server.herokuapp.com/me";

function* getUser() {
  
  if(localStorage.getItem("auth"))
  {
    try{
      let response = yield send_request("me", "GET", {});
      yield put({type:GET_ME_SUCCESS, response});
      console.log("get me api", response);
    }
    catch(error){
      yield put({type:GET_ME_FAILURE}, error)
    }
  }
  
    
}

function* getUserDashboard() {
  yield takeLatest(GET_ME_REQUEST, getUser);
}

export default getUserDashboard;
