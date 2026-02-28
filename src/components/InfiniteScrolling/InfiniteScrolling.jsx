import { useEffect, useState, useRef, useCallback } from "react";

const InfiniteScrolling = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();

    const limit = 10;
    const fetchData = async (pageNumber) => {
        setLoading(true);
        const skip = (pageNumber - 1) * limit;
        const res = await fetch(
            `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        const result = await res.json();
        const products = result.products;
        setData(prev => [...prev, ...products]);
        if (skip + limit >= result.total) {
            setHasMore(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const lastElementRef = useCallback((node) => {
        //Agar data load ho raha hai to kuch mat karo
        if (loading || !hasMore) {
            return;
        }
        //Agar pehle koi observer laga hua hai to usko hata do
        if (observer.current) {
            observer.current.disconnect();
        }
        //Naya observer create karo
        const newObserver = new IntersectionObserver((entries) => {
            const firstEntry = entries[0];
            //Agar element screen me aa gaya
            if (firstEntry.isIntersecting) {
                setPage((prevPage) => prevPage + 1);
            }
        });
        //Observer ko ref me store karo
        observer.current = newObserver;
        //Agar node exist karta hai to usko observe karo
        if (node) {
            newObserver.observe(node);
        }
    }, [loading, hasMore]);

    return (
        <div>
            <h1>Example of infinite scrolling</h1>
            <h2>Open developer tool go to network tab and scroll page API will hit automatically after each 10 records. </h2>
            {data.map((item, index) => {
                if (index === data.length - 1) {
                    return (
                        <div ref={lastElementRef} key={`${item.id}-${index}`}>
                            {index + 1}={item.title}
                        </div>
                    );
                }
                return <div key={`${item.id}-${index}`}>{index + 1}={item.title}</div>;
            })}
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default InfiniteScrolling