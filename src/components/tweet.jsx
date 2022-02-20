import React from 'react';

function Tweet(user, contents) {
    return (
        <div>
            <h2>{user}</h2>
            <p>{contents}</p>
        </div>
    );
}
 
export default Tweet;