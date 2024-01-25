import {BlogPosts} from "./BlogPostsList";
import {AllTagsList} from "./AllTagsList";
import {StyleSheet, Text, View} from "react-native";
import {useState} from "react";

export function GlobalFeed() {
    const [selectedTag, setTag] = useState('');

    return (
        <View>
            <View>
                <Text style={styles.title}>Tags</Text>
                <AllTagsList onTagClick={setTag}/>
            </View>
            <View>
                <Text style={styles.title}>Articles</Text>
                <BlogPosts selectedTag={selectedTag} onTagClick={setTag}/>
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
