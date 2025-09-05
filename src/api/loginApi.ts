import axiosInstance from './axiosInstance';
import { AxiosError } from 'axios';
import type { ErrorResponse } from '../types/errorResponse';
import { LoginFailedError, UnexpectedError } from '../errors/customErrors';

//서버 응답 dto
interface LoginResponse {
  accessToken: string;
}

//로그인 API 연동
export const login = async (username: string, password: string): Promise<LoginResponse> => {

  try {

    const response = await axiosInstance.post<LoginResponse>('/auth/login', { username, password });
    return response.data;

  } catch (error) {

    const apiError = error as AxiosError<ErrorResponse>;

    // 에러 응답이 존재하지 않으면 예상치 못한 에러로 간주
    if (!apiError.response) {
      throw new UnexpectedError("네트워크 오류가 발생했습니다.");
    }

    console.log(apiError)


    // 로그인 실패 에러
    if (apiError.response.status === 401 && apiError.response.data.code === 'A001') {
      throw new LoginFailedError("로그인 실패");
    }

    //기타 에러
    throw new UnexpectedError("예상치 못한 에러 발생!");
  }

};