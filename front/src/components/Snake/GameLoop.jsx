import { useRef, useEffect } from 'react'

const useGameLoop = (runningFunction, speed) => {
    const saveRunningFunction = useRef();

    useEffect(() => {
        saveRunningFunction.current = runningFunction;
    }, [runningFunction])

    useEffect(() => {
        const current = () => saveRunningFunction.current();
        
        if(speed !== null) {
            let inverval = setInterval(current, speed);
            return () => clearInterval(inverval);
        }
    }, [speed])
}

export default useGameLoop