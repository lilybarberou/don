export const fetchApi = async (url, options) => {
    const res = await fetch(`http://localhost:3000/api/${url}`, {...options, headers: {content_type: 'application/json'}});
    const data = await res.json();
    return data;
}