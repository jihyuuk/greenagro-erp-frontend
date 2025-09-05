// 공통 예외
export class UnexpectedError extends Error {
    constructor(message: string){
        super(message);
        this.name = "UnexpectedError";
    }
}

// 일반적인 로그인 실패 에러
export class LoginFailedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "LoginFailedError";
    }
}