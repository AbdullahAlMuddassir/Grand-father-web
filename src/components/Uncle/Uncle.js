import React from 'react';

const Uncle = (props) => {
    const {house}=props;
    return (
        <div>
            <h1>Uncle</h1>
            <h5>House:{house}</h5>
        </div>
    );
};

export default Uncle;