import {tagsUrl} from "./urls";
import {get} from "./get";

export const fetchAllTags = ({setData, setLoading}) => {
    get({url: tagsUrl, setData: json => setData(json), setLoading})
}
