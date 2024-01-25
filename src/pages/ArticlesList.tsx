import {Text, View, FlatList} from "react-native";
import {useEffect, useState} from "react";
import {Article} from "./Article";
import {fetchArticles} from "../apis/articles";
import {pageSize} from "../apis/types";

export function ArticlesList({selectedTag, onTagClick, pagination, setPagination}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticles({selectedTag, setData, setLoading, pagination: pagination});
    }, [selectedTag, pagination]);

    return (
        <View>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <View>
                    <FlatList
                        data={data.articles}
                        keyExtractor={item => item.slug}
                        onEndReached={() => setPagination({offset: pagination.offset + pageSize, limit: pagination.limit + pageSize})}
                        renderItem={({item}) => {
                            return (<Article article={item} onTagClick={onTagClick} setArticlesPagination={setPagination}></Article>)
                        }}
                    />
                </View>
            )}
        </View>
    );
}
