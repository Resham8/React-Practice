import { useRef } from "react";

export default function useDebounce(originalFn){
    const currentClock = useRef();

    const fn = () => {
        clearTimeout(currentClock.current)
        currentClock.current = setTimeout(originalFn, 200);
    }

    return fn;
}