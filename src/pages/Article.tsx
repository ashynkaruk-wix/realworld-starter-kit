import {StyleSheet, Text, View} from "react-native";
import {Tags} from "./Tag";
import {useEffect, useState} from "react";
import {getArticle} from "../apis/articles";
import {Author} from "./Author";

export function Article({route}) {
    const { slug } = route.params;
    const [article, setArticle] = useState(undefined);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getArticle({slug, setArticle, setLoading});
    }, []);
    return (<View>
        {loading ? (
            <Text>Loading...</Text>
        ) : (<View key={slug}>
            <Text style={styles.title}>{article.title}</Text>
            <Author author={article.author} createdAt={article.createdAt}></Author>
            <Text style={styles.body}>{article.body}</Text>
            {/*<View style={styles.tags}>*/}
            {/*    <Tags tags={article.tagList} onTagClick={onTagClick} setArticlesPagination={setArticlesPagination} setData={setData}></Tags>*/}
            {/*</View>*/}
            <View style={styles.hrLine}/>
        </View>)
        }
    </View>)
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 6,
        marginRight: 6,
        marginTop: 8,
        fontSize: 18,
        fontWeight: "600",
    },
    body: {
        marginLeft: 6,
        marginRight: 6,
        marginTop: 4,
        fontSize: 14,
        color: "#999",
    },
    hrLine: {
        margin: 14,
        borderBottomColor: "#999",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
