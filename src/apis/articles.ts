import {getArticlesUrl, listArticlesUrl} from "./urls";

export function fetchArticles({selectedTag, data, setData, setLoading, pagination}) {
    const url = listArticlesUrl(pagination, selectedTag);
    console.log("url: " + url)

    fetch(url)
        .then((resp) => resp.json())
        .then((json) => {
            const newArticlesPage = json.articles;
            setData(data.concat(newArticlesPage))
            //     console.log("response: " + JSON.stringify(json))
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
}

export function getArticle({slug, setArticle, setLoading}) {
    let url = getArticlesUrl(slug);
    console.log("get url: " + url)
    fetch(url)
        .then((resp) => resp.json())
        .then((json) => {
            setArticle(json.article);
            console.log("get response: " + JSON.stringify(json))
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

}
