import React, { useState, useEffect, useCallback } from "react";

function Search() {
    const [query, setQuery] = useState("");
    // function har render par naya banega
    // const fetchData = () => {
    //     console.log("API call for:", query);
    // };
    const fetchData = useCallback(() => {
        console.log("API call for:", query);
    }, [query]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}

export default Search;
