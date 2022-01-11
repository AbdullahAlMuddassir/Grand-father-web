import React from 'react';
import Brother from '../../Brother/Brother';
import MySelf from '../../MySelf/MySelf';
import Sister from '../../Sister/Sister';

const Father = (props) => {
    const{house}=props;
    return (
        <div>
            <h1>Father</h1>
            <h5>House:{house}</h5>
            <div style={{display:"flex"}}>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
            <MySelf house={house}></MySelf>
            </div>
        </div>
    );
};

export default Father;