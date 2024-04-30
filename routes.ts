/**
 *
 * Accesible routes for the public visitors
 * No Auth required
 * @type {string[]}
 */
export const publicRoutes = ["/"];
// export const publicRoutes = ["/", "/home"];

/**
 *
 * Accesible for authenticated users
 * Auth required
 * @type {string[]}
 */
export const authRoutes = ["/login", "/register", "/error"];

/**
 *
 * Prefix for API authentication routes
 * Routes used for API authentification purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 *
 * Default redirect path after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/home";
