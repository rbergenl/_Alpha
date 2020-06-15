import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useStore } from 'store';

function PrivateRoute({ children, ...rest }: RouteProps) {
    const { state } = useStore();

    return (
        <Route
          { ...rest }
          render={({ location }) => state.user.isSignedIn ?
            (
              children
            ) : (
              <Redirect to={{
                pathname: '/',
                state: { from: location }
              }} />
            )
          }
        />
    );
};

export default PrivateRoute;
