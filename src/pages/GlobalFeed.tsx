import {Author, BlogPosts} from "./BlogPostsList";
import {AllTagsList} from "./AllTagsList";
import {StyleSheet, Text, View} from "react-native";

export function GlobalFeed() {
    return (
        <View>
            <View>
                <Text style={styles.title}>Tags</Text>
                <AllTagsList/>
            </View>
            <View>
                <Text style={styles.title}>Articles</Text>
                <BlogPosts/>
            </View>
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
});
