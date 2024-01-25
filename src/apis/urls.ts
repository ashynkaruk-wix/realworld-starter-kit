const baseUrl = "https://api.realworld.io/api"
export const articlesUrl = `${baseUrl}/articles?limit=20`
export const articlesUrlFilteredByTags = (tag: string) => `${articlesUrl}&tag=${tag}`;
export const tagsUrl = `${baseUrl}/tags`
