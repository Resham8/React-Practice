import { useEffect, useState } from "react";

export function useFetch(url,interval){
    const[loading, setLoading] = useState(true);
    const[finalData, setFinalData] = useState({});
    const[error, setError] = useState(null);

    async function getDetails(){
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url);
        const json = await response.json()
        setFinalData(json);
        } catch (err) {
            setError(err);
        } finally{
            setLoading(false);
        }                        
    }

    useEffect(() => {
        getDetails();
        let fetchInterval = null;
        if(interval !== null){
            fetchInterval = setInterval(() => {
                getDetails();
            },interval)
        }

        return () => clearInterval(fetchInterval);
    },[url, interval])
    
    return {
        finalData,
        loading,
        error
    }
}