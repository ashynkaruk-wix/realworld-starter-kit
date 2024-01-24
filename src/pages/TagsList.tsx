import {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Author, TagList} from "./BlogPostsList";
import {tagsUrl} from "./constants";
import {Tags} from "./Tag";

export function TagsList() {
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
                <View>
                    <Text style={styles.title}>Tags</Text>
                    <View style={styles.tagsList}>
                        <Tags tags={data.tags}></Tags>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 6,
        marginRight: 6,
        marginTop: 8,
        marginBottom: 8,
        fontSize: 18,
        fontWeight: "600",
    },
    tagsList: {
        flexDirection: 'row',
        marginBottom: 20,
        flexWrap: 'wrap'
    }
});
