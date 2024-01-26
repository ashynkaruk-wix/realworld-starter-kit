import {getArticlesUrl, listArticlesUrl} from "./urls";

export const fetchArticles = ({selectedTag, data, setData, setLoading, pagination}) => {
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

export const getArticle = ({slug, setArticle, setLoading}) => {
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
