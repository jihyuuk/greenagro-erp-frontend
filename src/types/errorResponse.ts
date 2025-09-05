// 백엔드에서 내려주는 공통적인 에러 응답 형식을 정의합니다.
export interface ErrorResponse {

    type: string;     // 에러에 대한 문서 경로 또는 타입 정의
    title: string;    // HTTP 상태 코드에 대한 요약 설명 (예: "Unauthorized")
    status: number;    // HTTP 상태 코드 (예: 401, 404)
    detail: string;    // 사용자에게 보여줄 상세한 에러 메시지
    instance: string; // 에러가 발생한 요청 경로
    code: string;     // 백엔드에서 정의한 특정 에러 코드 (예: "A001")
    timestamp: string; // 에러 발생 시간
    
    // errors 필드는 key:value 형태의 리스트
    errors?: {
      [key: string]: string | number | string[] | number[];
    };
  }