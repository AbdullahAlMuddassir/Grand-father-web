import React from 'react';
import Special from '../Special/Special';

const MySelf = (props) => {
    const {house}=props;
    return (
        <div>
            <h1>Myself</h1>
            <h5>House:{house}</h5>
            <Special></Special>
        </div>
    );
};

export default MySelf;