import {articlesUrl, articlesUrlFilteredByTags} from "./urls";
import {get} from "./get";

export function fetchArticles({selectedTag, setData, setLoading}) {
    const url = selectedTag ? articlesUrlFilteredByTags(selectedTag) : articlesUrl;
    console.log("url: " + url)

    get({url, setData, setLoading})
}
