import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'


export const RingContext = createContext("Diamond");

const Grandpa = () => {
    const [house, setHouse] = useState(1)

    const ornament = 'Diamond Ring';

    const handleBuyHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    
    
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className="grandpa">
                <h1>Grandpa</h1>
                <button onClick={handleBuyHouse}>Buy House</button>
                <p>House: {house}</p>
                <section style={{ display: "flex" }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;