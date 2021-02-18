import React,{useState, createContext} from 'react';


export const MovieContext = createContext();

export const MovieProvider = (props) =>{
    const [movies, setMovies] = useState([
        {
            name : 'Harry Potter',
            price : '$10',
            id : 23123

        },
        {
            name : 'G.O.T ',
            price : '$10',
            id : 55661

        },
        {
            name : 'Inception',
            price : '$10',
            id : 85546

        }
    ]);

    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}

        </MovieContext.Provider>
    );

    


}