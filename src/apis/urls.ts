import {Pagination} from "./types";

const baseUrl = "https://api.realworld.io/api"
export const listArticlesUrl = (pagination: Pagination, tag?: number) => {
    const urlWithPagination = `${baseUrl}/articles?offset=${pagination.offset}&limit=${pagination.limit}`;
    return tag ? `${urlWithPagination}&tag=${tag}` : urlWithPagination
}

export const getArticlesUrl = (slug: string) => `${baseUrl}/articles/${slug}`
export const tagsUrl = `${baseUrl}/tags`
