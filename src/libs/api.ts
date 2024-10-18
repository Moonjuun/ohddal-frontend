import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// 로깅 활성화 여부
const LOGGING = process.env.NODE_ENV !== 'production';

// 요청 및 응답 인터셉터 설정
const apiClient = axios.create({
  baseURL: '/api',
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (LOGGING) {
      console.log(
        `%c[REQ] ${config.method?.toUpperCase()} ${config.url}`,
        'color: blue; font-weight: bold',
        config.data || config.params
      );
    }
    return config;
  },
  (error) => {
    if (LOGGING) {
      console.error('%c[REQ ERROR]', 'color: red; font-weight: bold', error);
    }
    return Promise.reject(error);
  }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (LOGGING) {
      console.log(
        `%c[RES] ${response.config.method?.toUpperCase()} ${response.config.url}`,
        'color: green; font-weight: bold',
        response.data
      );
    }
    return response;
  },
  (error) => {
    if (LOGGING) {
      console.error(
        `%c[RES ERROR] ${error.response?.config.method?.toUpperCase()} ${
          error.response?.config.url
        }`,
        'color: red; font-weight: bold',
        error.response?.data || error
      );
    }
    return Promise.reject(error);
  }
);

// API 호출 함수 예제
export const commonApi = {
  get: (url: string, config?: AxiosRequestConfig) => apiClient.get(url, config),
  post: (url: string, data?: any, config?: AxiosRequestConfig) => apiClient.post(url, data, config),
  put: (url: string, data?: any, config?: AxiosRequestConfig) => apiClient.put(url, data, config),
  delete: (url: string, config?: AxiosRequestConfig) => apiClient.delete(url, config),
};

// 사용 예제
// api.get('/endpoint').then(response => console.log(response.data));
