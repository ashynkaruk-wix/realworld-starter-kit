import {Author, BlogPosts} from "./BlogPostsList";
import {TagsList} from "./TagsList";
import {View} from "react-native";

export function GlobalFeed() {
    return (
        <View>
            <TagsList/>
            <BlogPosts/>
        </View>
    );
}
