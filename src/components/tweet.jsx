import React from 'react';

function Tweet(user, contents, time) {
    const date = new Date(time).toLocaleString();
    return (
        <div>
            <h2>{user}</h2>
            <p>{contents}</p>
            <p>{date}</p>
        </div>
    );
}
 
export default Tweet;