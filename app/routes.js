import {
	Router,
	Route,
	browserHistory,
	IndexRoute
} from 'react-router'
import React from 'react'

import App from './containers/App'
import News from './containers/News'
import About from './containers/About'
import Home from './containers/Home'
import Counter from './containers/Counter.js'
import Notes from './containers/Notes'
import EnvTable from './components/EnvTable'
import DashBoard from './containers/DashboardContainer'
import BDMap from './components/BDMap'

export default (
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	      {/*<IndexRoute component={Home}/>*/}
		  <IndexRoute component={DashBoard}/>
	      <Route path="news" component={News} />
	      <Route path="about" component={About} />
	      <Route path="counter" component={Counter}/>
		  <Route path="notes" component={Notes}/>
		  <Route path="env" component={EnvTable}/>
		  <Route path="dashboard" component={DashBoard}/>
		  <Route path='map' component={BDMap}/> 
	    </Route>
	 </Router>
)



// import Picture from './components/Picture'
// import Counter from './containers/Counter'
// const rootRoute = {
//     path: '/',
//     component: App,
//     indexRoute: { component: Home },
//     childRoutes: [
//       { path: 'home', component: Home },
//       {
//         path: 'news',
//         getComponent(nextState, callback) {
//           //如果是服务端，直接返回
//           if(__SERVER__){
//             callback(null, require('./containers/News'))
//           }else{
//             // client端，利用webpack的 Code Splitting 功能，分片打包实现懒加载
//             require.ensure([], function (require) {
//               callback(null, require('./containers/News'))
//             })
//           }
//         }
//       },
//       {
//         path: 'about',
//         getComponent(nextState, callback) {
//           if(__SERVER__){
//             callback(null, require('./containers/About'))
//           }else{
//             require.ensure([], function (require) {
//               callback(null, require('./containers/About'))
//             })
//           }
//         }
//       }
//     ]
// }

// 这种方式怎么试都没有效果，以后再来看看
// export default ( <Router history={browserHistory} routes={rootRoute} /> )

// <Route path="picture" component={Picture} />
// <Route path="counter" component={Counter} />