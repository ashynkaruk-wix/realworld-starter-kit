import {Text, View} from "react-native";
import {useEffect, useState} from "react";

export function BlogPosts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "https://api.realworld.io/api/articles?limit=20"

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((json) => {
                setData(json)
                console.log("response: " + JSON.stringify(json))
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View >
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                //  <Text>AAA</Text>
                data.articles.map((article) => {
                    return (
                        <View key = {article.slug}>
                            <Text>{article.title}</Text>
                            <Text>{article.description}</Text>
                        </View>
                    );
                })
            )}
        </View>
    );
}
