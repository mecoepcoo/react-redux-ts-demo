import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderRoutes from '@/utils/renderRouters';
import { routes, basename } from './router';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import '@/App.less';

const authed = false;
const authPath = '/login';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>{renderRoutes(routes, authed, authPath)}</BrowserRouter>
    </Provider>
  );
};

export default App;
