import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Auth0SignIn = () => {

    const {
        loginWithRedirect,
        isAuthenticated,
        user,
        logout
    } = useAuth0();

    return (

        <div className="container mt-5 mb-5 text-center">

            {!isAuthenticated ? (

                <>
                    <h2 className="mb-4">
                        Sign In
                    </h2>

                    <button
                        className="btn btn-primary"
                        onClick={() => loginWithRedirect()}
                    >
                        Login with Auth0
                    </button>
                </>

            ) : (

                <>
                    <h3>
                        Welcome {user?.name}
                    </h3>

                    <p>{user?.email}</p>

                    <button
                        className="btn btn-danger"
                        onClick={() =>
                            logout({
                                logoutParams: {
                                    returnTo: window.location.origin
                                }
                            })
                        }
                    >
                        Logout
                    </button>
                </>

            )}

        </div>
    );
};

export default Auth0SignIn;