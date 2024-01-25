import {articlesUrl} from "./urls";
import {get} from "./get";

export function fetchArticles({selectedTag, setData, setLoading, pagination}) {
    const url = articlesUrl(pagination, selectedTag);
    console.log("url: " + url)

    get({url, setData, setLoading})
}
