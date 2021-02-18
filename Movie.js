import React from 'react';

const Movie = ({name,price}) => {

    return(
        <div>
             <h1>{name}</h1>
             <h1>{price}</h1>
             <br />
           

        </div>
    );


};

export default Movie;