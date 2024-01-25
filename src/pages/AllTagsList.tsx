import {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {tagsUrl} from "../apis/constants";
import {Tags} from "./Tag";
import {fetchAllTags} from "../apis/tags";

export function AllTagsList({onTagClick}) {
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
                    <Tags tags={data.tags} onTagClick={onTagClick}></Tags>
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
