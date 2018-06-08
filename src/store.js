import { createStore, combineReducers } from 'redux'
import Change from './reducer/Change'
const store = createStore(combineReducers({Change}))

export default store