import {Text, View, FlatList} from "react-native";
import {useEffect, useState} from "react";
import {ArticleItem} from "./ArticleItem";
import {fetchArticles} from "../apis/articles";
import {pageSize} from "../apis/types";

export const ArticlesList = ({selectedTag, onTagClick, pagination, setPagination, data, setData}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticles({selectedTag, data, setData, setLoading, pagination: pagination});
    }, [selectedTag, pagination]);

    return (
        <View>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <View>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.slug}
                        onEndReached={() => setPagination({
                            offset: pagination.offset + pageSize,
                            limit: pagination.limit + pageSize
                        })}
                        renderItem={({item}) => {
                            return (<ArticleItem article={item} onTagClick={onTagClick}
                                                 setArticlesPagination={setPagination} setData={setData}
                            ></ArticleItem>)
                        }}
                    />
                </View>
            )}
        </View>
    );
}
