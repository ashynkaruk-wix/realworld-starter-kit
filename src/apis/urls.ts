import {Pagination} from "./types";

const baseUrl = "https://api.realworld.io/api"
export const articlesUrl = (pagination: Pagination, tag?: number) => {
    const urlWithPagination = `${baseUrl}/articles?offset=${pagination.offset}&limit=${pagination.limit}`;
    return tag ? `${urlWithPagination}&tag=${tag}` : urlWithPagination
}
export const tagsUrl = `${baseUrl}/tags`
