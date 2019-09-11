/* 中间件配置 */
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.REACT_APP_ENV !== 'prod') {
  const Logger = require('redux-logger');
  middlewares.push(Logger.createLogger());
}

export default middlewares;
