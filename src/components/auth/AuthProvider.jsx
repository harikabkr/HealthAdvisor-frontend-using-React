import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH0_REDIRECT_URL } from "../../utils/urls";
import { AUTH0_DOMAIN_URL, AUTH0_CLIENTID } from "../../utils/secrets";

export const AuthProvider = ({ children }) => {
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN_URL}
      clientId={AUTH0_CLIENTID}
      authorizationParams={{
        redirect_uri: AUTH0_REDIRECT_URL,
      }}
    >
        {children}
    </Auth0Provider>
  );
};
