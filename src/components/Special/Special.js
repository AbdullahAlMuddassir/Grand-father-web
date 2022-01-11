import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
    // const {ornaments}=props;
 const ornaments =useContext(RingContext);
 
    return (
        <div>
            <h1>Special</h1>
            <h2>Ornaments:{ornaments}</h2>
        </div>
    );
};

export default Special;