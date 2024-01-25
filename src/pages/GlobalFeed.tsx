import {ArticlesList} from "./ArticlesList";
import {AllTagsList} from "./AllTagsList";
import {StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import {pageSize} from "../apis/types";

export function GlobalFeed() {
    const [selectedTag, setTag] = useState('');
    const [articlesPagination, setArticlesPagination] = useState({offset: 0, limit: pageSize});
    const [articlesData, setArticlesData] = useState([]);

    return (
        <View>
            <View>
                <Text style={styles.title}>Tags</Text>
                <AllTagsList onTagClick={setTag} setArticlesPagination={setArticlesPagination} setArticlesData={setArticlesData}/>
            </View>
            <View>
                <Text style={styles.title}>Articles</Text>
                <ArticlesList selectedTag={selectedTag} onTagClick={setTag}
                              pagination={articlesPagination} setPagination={setArticlesPagination}
                              data={articlesData} setData={setArticlesData}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        marginLeft: 6,
        marginRight: 6,
        marginTop: 4,
        marginBottom: 4,
        fontSize: 18,
        fontWeight: "600",
    },
});
