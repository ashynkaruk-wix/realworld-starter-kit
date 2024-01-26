export const get = ({url, setData, setLoading}) => {
    fetch(url)
        .then((resp) => resp.json())
        .then((json) => {
            setData(json)
       //     console.log("response: " + JSON.stringify(json))
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
}
