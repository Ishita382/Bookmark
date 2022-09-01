import React from "react";
import send_request from "../Request";
import { put } from "redux-saga/effects";
import { GET_FOLDER_CHILDREN_FAILURE, GET_FOLDER_CHILDREN_SUCCESS } from "../actions/constant";

function* getFolderChildren(action){
    try{
        const response = yield send_request(`folders?folderId=${action.payload}`, "GET", {});
        yield put({type: GET_FOLDER_CHILDREN_SUCCESS, payload : {response}});
        console.log(response);
    }
    catch(error){
        yield put({type:GET_FOLDER_CHILDREN_FAILURE}, error);
    }
}

export default getFolderChildren;