export const fetchApi = async (url, options) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/${url}`, {...options, headers: {content_type: 'application/json'}});
    const data = await res.json();
    return data;
}