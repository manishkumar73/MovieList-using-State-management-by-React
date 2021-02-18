import React,{useContext} from 'react';
import { MovieContext } from './MovieContext';
import './nav.css'

const Nav = () => {
    const [movies,setMovies] = useContext(MovieContext);
    return(
        <div className='nav'>
             <h1>Manish</h1>
             <h1>No of movies : { movies.length}</h1>
             <br />
           

        </div>
    );


};

export default Nav;