import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component, ...rest }) => {
  const isUserAuthenticated = state => state.user.isAuthenticated;
  const Component = component;
  const isAuthenticated = useSelector(isUserAuthenticated);
  const RedirectEl = location => (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: location }
      }}
    />
  );

  const RenderEl = ({ path, ...prop }) => (isAuthenticated ? <Component {...prop} /> : <RedirectEl location={path} />);

  RenderEl.propTypes = {
    path: PropTypes.string
  };

  return <Route {...rest} render={props => <RenderEl {...props} />} />;
};
PrivateRoute.propTypes = {
  component: PropTypes.Component
};
export default PrivateRoute;
