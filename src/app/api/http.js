
import axios from 'axios';
import { ErrorActions } from '../reducers/error';

export function getWindow() {
  return window;
}

const inputRequest = axios.CancelToken.source();

export const http = axios.create({
  baseURL: getWindow().config?.apiUrl,
  cancelToken: inputRequest.token,
});

http.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');

    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }

    config.withCredentials = true;
    return config;
  },
  error => {
    Promise.reject(error);
  },
);


http.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if ([403, 500].includes(error?.response?.status)) {
      const msg = error?.response?.data?.message || '';

      if (/refresh token/i.test(msg)) {
        inputRequest.cancel();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        getWindow().location.href = '/';
      }
    }

    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');

      return http
        .post(`/api/v1/accounts/renew-token`, {
          refreshToken,
        })
        .then(res => {
          if (res.status === 200) {
            const accessToken = res.data.accessToken.value

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken.value);

            http.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

            return http(originalRequest);
          }
        });
    }

    const message = error?.response?.data?.message
    window.getStore().dispatch(ErrorActions.setMessage({ message }))
    return Promise.reject(error);
  },
);
