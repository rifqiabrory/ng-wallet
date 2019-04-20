export class CommonResponse<T>{
    status: string;
    message: string;
    data: T;
}