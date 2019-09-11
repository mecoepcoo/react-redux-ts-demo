import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes, basename } from './router';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import '@/App.less';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  );
};

export default App;
