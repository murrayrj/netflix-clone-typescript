export interface MovieDBResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Array<Record<string, any>>;
}
