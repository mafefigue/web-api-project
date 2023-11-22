import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";

import React from "react";

//creando boton para iniciar sesion
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        className="bg-indigo-500 px-3 py-1 text-white"
        onClick={() => loginWithRedirect}
      >
        Sign In with Google
      </button>
    )
  );
};

function Login() {
  return (
    <div>
      <div className="max-w-md mx-auto bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Auth0Login</h1>

        <LoginButton />
      </div>
    </div>
  );
}

export default Login;

/*<React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>

*/
