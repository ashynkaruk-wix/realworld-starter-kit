import {Chip} from "react-native-paper";
import {StyleSheet} from "react-native";
import {pageSize} from "../apis/types";

export function Tags({tags, onTagClick, setArticlesPagination, setData}) {
    return (
        tags.map((tag) => {
            return (
                <Tag key={tag} tag={tag} onTagClick={onTagClick} setArticlesPagination={setArticlesPagination} setData={setData}></Tag>
            );
        })
    );
}

export function Tag({tag, onTagClick, setArticlesPagination, setData}) {
    return (
        <Chip
            style={styles.style} textStyle={styles.textStyle}
            onPress={() => {
                console.log("setting filter to " + tag);
                onTagClick(tag);
                setArticlesPagination({offset: 0, limit: pageSize});
                setData([]);
            }}
        >
            {tag}
        </Chip>
    );
}

const styles = StyleSheet.create({
    style: {
        borderColor: "#999",
        backgroundColor: `white`,
        marginRight: 4,
        marginLeft: 6,
        marginTop: 4,
    },
    textStyle: {
        fontSize: 10
    }
});
