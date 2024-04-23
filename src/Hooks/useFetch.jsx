import { useState } from "react";

function useEffect(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPeding] = useState(false);

    useEffect(( => {
        const getData = async () => {
            setIsPeding(true);
            try {
                const req = awit fetch(url);

                if (!req.ok) {
                    throw new Error("Something went wrong :(");



                    const data = await req.json();
                    setData(data);
                    setIsPeding(false);
                } catch (err) {
                    console.log(err.massage);
                    setError(err.massage);
                    setIsPeding(false);
                }
            };
            getData();
        }, [url];

        return {data, error, isPending};
    }))
};

export {useEffect};