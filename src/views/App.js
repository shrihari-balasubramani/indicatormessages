import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@xstyled/styled-components';
import { Provider } from 'react-redux';
import GlobalStyles from '../globalStyle';
import theme from '../theme';
import MessagesListPage from './MessagesListPage';
import MessageDetailsPage from './MessageDetailsPage';
import LoginPage from './LoginPage';
import store from '../core/store/store';
import PrivateRoute from '../Components/Router';

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyles />
      <Router>
        <Switch>
          <PrivateRoute path='/messages' component={MessagesListPage} />
          <PrivateRoute
            path='/message_details/:messageId'
            component={MessageDetailsPage}
          />
          <Route path='/login' component={LoginPage} />
          <Route path='/' component={LoginPage} />
        </Switch>
      </Router>
    </Provider>
  </ThemeProvider>
);
export default App;
