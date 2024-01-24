import {Chip} from "react-native-paper";
import {StyleSheet} from "react-native";

export function Tags({tags}) {
    return (
        tags.map((tag) => {
            return (
                <Tag tag={tag}></Tag>
            );
        })
    );
}

export function Tag({tag}) {
    return (
        <Chip style={styles.tag} textStyle={{fontSize: 12}}>{tag}</Chip>
    );
}

const styles = StyleSheet.create({
    tag: {
        borderColor: "#999",
        backgroundColor: `white`,
        marginRight: 4,
        marginLeft: 6,
        marginTop: 4,
    }
});
