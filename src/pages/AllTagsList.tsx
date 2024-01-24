import {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Author, TagList} from "./BlogPostsList";
import {tagsUrl} from "./constants";
import {Tags} from "./Tag";

export function AllTagsList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(tagsUrl)
            .then((resp) => resp.json())
            .then((json) => {
                setData(json)
                console.log("response: " + JSON.stringify(json))
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <View style={styles.tagsList}>
                    <Tags tags={data.tags}></Tags>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    tagsList: {
        flexDirection: 'row',
        marginBottom: 20,
        flexWrap: 'wrap'
    }
});
