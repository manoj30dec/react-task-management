import { useMemo } from "react";

const useAddition = (a, b) => {
    const sum = useMemo(() => {
        return Number(a) + Number(b);
    }, [a, b]);

    return sum;
};

export default useAddition;