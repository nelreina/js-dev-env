export const getBaseUrl = () => /localhost/.test(window.location.hostname) ? 'http://localhost:8081/' : '/';
