import {getArticlesUrl, listArticlesUrl} from "./urls";
import {get} from "./get";

export const fetchArticles = ({selectedTag, data, setData, setLoading, pagination}) => {
    const url = listArticlesUrl(pagination, selectedTag);
    console.log("url: " + url);

    get({url, setData: (json) => setData(data.concat(json.articles)), setLoading});
}

export const getArticle = ({slug, setArticle, setLoading}) => {
    let url = getArticlesUrl(slug);
    console.log("get url: " + url);

    get({url, setData: (json) => setArticle(json.article), setLoading});
}
