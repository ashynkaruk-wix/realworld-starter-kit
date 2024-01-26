import {StyleSheet, Text, View} from "react-native";
import {Tags} from "./Tag";
import {Author} from "./Author";
import {useNavigation} from "@react-navigation/native";

export const ArticleItem = ({article, onTagClick, setArticlesPagination, setData}) => {
   const navigation = useNavigation();

    const tagsComponent = <View style={styles.tags}>
        <Tags tags={article.tagList} onTagClick={onTagClick} setArticlesPagination={setArticlesPagination} setData={setData}></Tags>
    </View>;
    return (<View key={article.slug}>
        <Author author={article.author} createdAt={article.createdAt}></Author>
        <Text style={styles.title} onPress={_ => navigation.navigate('Article', {
            slug: article.slug,
            tagsComponent: tagsComponent
        })}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
        {tagsComponent}
        <View style={styles.hrLine}/>
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
    description: {
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
    tags: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
});
