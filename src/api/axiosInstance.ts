import axios from 'axios';

//Axios 인스턴스 
const axiosInstance = axios.create({
  baseURL: 'http://172.30.1.44:8080', 
  timeout: 5000,
});


//요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    //로컬 스토리지에서 JWT 토큰 가져오기
    const token = localStorage.getItem('token');
    
    //토큰이 존재하면 Authorization 헤더에 Bearer 토큰 형식으로 추가
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 요청 에러가 발생했을 때 처리
    return Promise.reject(error);
  }
);


//응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    // 응답이 성공적으로 왔을 때 처리
    return response;
  },
  (error) => {
    // 응답 에러가 발생했을 때 처리
    if (error.response) {
      const status = error.response.status;
      const code = error.response.data.code;


      if (status === 401 && code === 'A002') {
        // 로컬 스토리지에서 토큰 제거
        localStorage.removeItem('token');

        // 로그인 페이지로 리다이렉트 (window.location 사용)
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;