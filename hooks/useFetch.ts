import {useEffect, useState} from "react";

export default function useFetch({fetchFn, shouldFetch, query = ""}) {
    //TODO: data deería empezar como null porque no siempre se espera un array
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function fetchData() {
        if (!fetchFn) return;

        setLoading(true);
        setError(null);

        fetchFn(query)
            .then((response) => {
                if (!response.ok) {
                    //TODO: está bien setear data a [] acá? podría no aplicar a todos los casos
                    setData([]);
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((result) => {
                setData(result);
            })
            .catch((err) => {
                console.error("Error in useFetch:", err);
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        if (shouldFetch) {
            fetchData();
        }
    }, [fetchFn, shouldFetch, query]);

    return {
        data,
        loading,
        error,
        reFetch: fetchData,
        setData,
    };
}