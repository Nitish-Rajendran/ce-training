
interface PaginationResponse<T> {
    page: number;
    pageSize: number;
    total: number;
    data: T[];
}

type StringOrStrings = string | string[];

interface Notification {
    id: string;
    message: string;
    createdAt: Date;
}

type NumberCallback = (value: number) => void;

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
