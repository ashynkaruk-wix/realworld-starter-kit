import {tagsUrl} from "./urls";
import {get} from "./get";

export function fetchAllTags({setData, setLoading}) {
    get({url: tagsUrl, setData, setLoading})
}
