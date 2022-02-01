import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import logo from '../layout/logo.png'
import logo from '../Routing/logo.png'
const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  history,
  ...rest
}) => {
  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
        />
      </div>
    );
  } else
  return (
  <Route
    {...rest}
    render={props =>
      loading ? (
        <img
        src={logo}
      />
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        history.replace('/login')
        // <Redirect to="/" />
      )
    }
  />
)
  };
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(PrivateRoute));
