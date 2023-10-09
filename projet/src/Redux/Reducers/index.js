import { combineReducers } from 'redux'
import authReducer from './authReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    auth: authReducer, // Reducer de l'authentification pour gérer son état
    user: userReducer, //Reducer de l'utilisateur pour gérer son état
})

export default rootReducer