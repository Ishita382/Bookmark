import { put, takeLatest } from "redux-saga/effects";
import { GET_MY_FOLDERS_REQUEST, GET_MY_FOLDERS_FAILURE, GET_MY_FOLDERS_SUCCESS } from "../Actions/constant";
import send_request from "../Request";

function* getUserFolders(){
    if(localStorage.getItem("auth")){
        try{
            let response = yield send_request("folders", "GET", {});
            yield put({type:GET_MY_FOLDERS_SUCCESS, response});
            console.log("My folders", response);
        }
        catch(error){
            yield put ({type:GET_MY_FOLDERS_FAILURE}, error);
        }
    }
}

function* userFolders(){
    yield takeLatest(GET_MY_FOLDERS_REQUEST, getUserFolders);
}

export default userFolders;