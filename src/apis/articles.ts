import {articlesUrl} from "./urls";
import {get} from "./get";

export function fetchArticles({selectedTag, data, setData, setLoading, pagination}) {
    const url = articlesUrl(pagination, selectedTag);
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
