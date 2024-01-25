import {Text, View, FlatList} from "react-native";
import {useEffect, useState} from "react";
import {articlesUrl, articlesUrlFilteredByTags} from "./constants";
import {Article} from "./Article";
export function ArticlesList({selectedTag, onTagClick}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = selectedTag ? articlesUrlFilteredByTags(selectedTag) : articlesUrl;
        console.log("url: " + url)

        fetch(url)
            .then((resp) => resp.json())
            .then((json) => {
                setData(json)
                console.log("response: " + JSON.stringify(json))
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [selectedTag]);

    return (
        <View>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <View>
                    <FlatList
                        data={data.articles}
                        keyExtractor={item => item.slug}
                        renderItem={({item}) => {return (<Article article={item} onTagClick={onTagClick}></Article>)}}
                    />
                </View>
            )}
        </View>
    );
}
