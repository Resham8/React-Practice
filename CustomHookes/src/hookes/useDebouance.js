import { useEffect, useState } from "react";

function useDebounce(value, delay){
    const[debounceValue, setDebounceValue] = useState("");

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDebounceValue(value)
        },delay)

        return () => clearTimeout(timeout);
    },[value,delay]);

    return debounceValue;
}

export default useDebounce;