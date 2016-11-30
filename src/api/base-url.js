
export const getBaseUrl = () => /useMockApi=true/.test(window.location.href) ? 'http://localhost:8081/' : '/';
