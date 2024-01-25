import {Chip} from "react-native-paper";
import {StyleSheet} from "react-native";

export function Tags({tags, onTagClick}) {
    return (
        tags.map((tag) => {
            return (
                <Tag key={tag} tag={tag} onTagClick={onTagClick}></Tag>
            );
        })
    );
}

export function Tag({tag, onTagClick}) {
    return (
        <Chip
            style={styles.style} textStyle={styles.textStyle}
            onPress={() => {
                console.log("setting filter to " + tag)
                onTagClick(tag)
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
