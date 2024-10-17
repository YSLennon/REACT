import React, { useEffect, useRef } from 'react';


const Review2 = () => {
    const searchRef = useRef();
    useEffect(() => {
        console.log(searchRef);
        searchRef.current.focus();
    },[])
    return (
        <div>
            <input ref={searchRef} />
            <button onClick={() => {
                alert(searchRef.current.value);
                searchRef.current.value = '';
                searchRef.current.focus();

            }}>search</button>

            
        </div>
    );
};

export default Review2;