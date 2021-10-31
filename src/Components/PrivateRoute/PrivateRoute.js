import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';
import useFirebase from '../../hooks/useFirebase';




const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={({ location }) => user?.displayName ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}></Redirect>

            }
        >
        </Route >
    );
};

export default PrivateRoute;