export interface GenericListResponse<T> {
    content: T[];
    // first: boolean;
    // last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    numberOfElements: number;
}
