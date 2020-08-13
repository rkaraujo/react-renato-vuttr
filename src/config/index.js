const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://backend.production';

export default {
  URL_BACKEND,
};
