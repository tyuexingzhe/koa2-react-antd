/**
 *
 */
import { combineReducers } from 'redux'
import counter from './counter'
import server from './serverState'
import news from './news'
import about from './about'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import env from './env'
import summary from './summary'
export default combineReducers({
  counter,
  server,
  news,
  about,
  todos,
  visibilityFilter,
  env,
  summary
})
