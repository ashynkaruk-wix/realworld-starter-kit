import {Text, View, FlatList} from "react-native";
import {useEffect, useState} from "react";
import {Article} from "./Article";
import {fetchArticles} from "../apis/articles";

export function ArticlesList({selectedTag, onTagClick}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticles({selectedTag, setData, setLoading});
    }, [selectedTag, data, loading]);

    return (
        <View>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <View>
                    <FlatList
                        data={data.articles}
                        keyExtractor={item => item.slug}
                        renderItem={({item}) => {
                            return (<Article article={item} onTagClick={onTagClick}></Article>)
                        }}
                    />
                </View>
            )}
        </View>
    );
}
