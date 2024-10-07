export interface ErrorResponse {
    statusCode?: number;
    statusMessage?: string;
    message?: string;
    code?: string;
}

export type ApiRes<T> = {
    data: T;
};
