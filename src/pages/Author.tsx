import {Image, StyleSheet, Text, View} from "react-native";
import {format, toDate} from "date-fns/index";

export const Author = ({author, createdAt}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: `${author.image}`,
                }}
            />
            <AuthorNameAndDate author={author} createdAt={createdAt}></AuthorNameAndDate>
        </View>
    )
}

export function AuthorNameAndDate({author, createdAt}) {
    const date = new Date(createdAt)
    const formattedDate = format(toDate(date), 'MMMM dd, yyyy');
    return (
        <View>
            <Text style={styles.author}>{author.username}</Text>
            <Text style={styles.createdAt}>{formattedDate}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        marginLeft: 6,
        marginRight: 6,
    },
    author: {
        marginLeft: 4,
        fontSize: 16,
        color: "#8fbc8f"
    },
    createdAt: {
        marginLeft: 4,
        fontSize: 12,
        color: "#999",
    },
});
