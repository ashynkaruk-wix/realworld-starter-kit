import {Text, View, Image, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {format, toDate} from "date-fns";
import {articlesUrl} from "./constants";
import {Tags} from "./Tag";

export function BlogPosts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(articlesUrl)
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
                data.articles.map((article) => {
                    return (
                        <View key={article.slug}>
                            <Author author={article.author} createdAt={article.createdAt}></Author>
                            <Text style={styles.title}>{article.title}</Text>
                            <Text style={styles.description}>{article.description}</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Tags tags={article.tagList}></Tags>
                            </View>
                            <View style={styles.hrLine}/>
                        </View>
                    );
                })
            )}
        </View>
    );
}

export function Author({author, createdAt}) {
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
    hrLine: {
        margin: 14,
        borderBottomColor: "#999",
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});
