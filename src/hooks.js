import { useState} from "react";

const useFlip = (initialState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialState);
    const flipCard = () => {
        setIsFlipped(isUp => !isUp);
    };
    return [isFlipped, flipCard];
}

export default useFlip;