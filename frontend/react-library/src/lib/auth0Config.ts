export const auth0Config = {
    domain: "dev-j1yvkf0p54e5b8h0.us.auth0.com",
    clientId: "McfJaAwltGJRLatk6ALg5OuasVGjzPnp",
    authorizationParams: {
        redirect_uri: window.location.origin+"/callback",
        audience: "http://localhost:8080",
        scope: "openid profile email"
    }
};