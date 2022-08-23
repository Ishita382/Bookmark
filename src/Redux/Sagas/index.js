import { fork } from 'redux-saga/effects'
import loginDetails from './login'
import registrationDetails from './register';
import getUserDashboard from './getMe';
function* mySaga(){
    yield fork(loginDetails);
    yield fork(registrationDetails);
    yield fork(getUserDashboard);
}

export default mySaga;
