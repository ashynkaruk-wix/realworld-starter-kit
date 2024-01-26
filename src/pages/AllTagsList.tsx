import {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Tags} from "./Tag";
import {fetchAllTags} from "../apis/tags";

export const AllTagsList = ({onTagClick, setArticlesPagination, setArticlesData}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllTags({setData, setLoading});
    }, [data, loading]);

    return (
        <View>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <View style={styles.tagsList}>
                    <Tags tags={data.tags} onTagClick={onTagClick} setArticlesPagination={setArticlesPagination} setData={setArticlesData}></Tags>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    tagsList: {
        flexDirection: 'row',
        marginBottom: 8,
        flexWrap: 'wrap'
    }
});
