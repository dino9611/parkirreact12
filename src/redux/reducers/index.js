import {combineReducers} from 'redux'
import CounterReducers from './CounterReducers'
import KataReducers from './KataReducers'
import ParkirReducers from './Parkirreducers'
const reducers=combineReducers({
    Count:CounterReducers,
    Kata:KataReducers,
    Parkir:ParkirReducers
})

export default reducers