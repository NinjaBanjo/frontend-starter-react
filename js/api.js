import Axios from 'axios';

const Api = $.extend({
  endpoint: 'http://localhost:3000/api/v1/'
}, Axios);

Api.interceptors.request.use(function (config) {
  // Convert to string and make indexOf check
  if (config.url.indexOf('http://') !== 0) {
    config.url = Api.endpoint + config.url;
  }
  return config;
});

Api.get('users')
  .then(function (e) {
    console.log(e);
  });

export default Api;