/*
  Main component of the application.
  This component is responsible for structuring the main layout of the
  application.
  This component is also responsible for routing the main content of the
  application.
*/

import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';

import mainRoutes from '../../routes/main';

const App = () => (
  <Layout>
    <Layout>
      <Switch>
        {mainRoutes.map((mainRoute) => (
          <Route
            key={mainRoute.path}
            exact={mainRoute.exact}
            path={mainRoute.path}
            component={mainRoute.component}
          />
        ))}
      </Switch>
    </Layout>
  </Layout>
);

export default App;
