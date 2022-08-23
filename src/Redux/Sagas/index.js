import { fork } from 'redux-saga/effects'
import loginDetails from './login'
import registrationDetails from './register';
import getUserDashboard from './getMe';
import userFolders from './getMyFolders';
function* mySaga(){
    yield fork(loginDetails);
    yield fork(registrationDetails);
    yield fork(getUserDashboard);
    yield fork(userFolders);
}

export default mySaga;
