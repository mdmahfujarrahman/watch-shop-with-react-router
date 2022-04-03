import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house, ornament }) => {
    return (
        <div>
            <h5>Me</h5>
            <p>
                <small>House: {house}</small>
                <Special ornament={ornament}></Special>
            </p>
        </div>
    );
};

export default MySelf;
