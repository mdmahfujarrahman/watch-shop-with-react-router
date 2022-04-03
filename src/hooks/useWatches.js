import { useEffect, useState } from "react";

const useWatches = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setWatches(data));
    }, []);

    return [watches, setWatches];
};
export default useWatches;