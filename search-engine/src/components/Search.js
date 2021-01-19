import React, {useState} from 'react';
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

function Search (){
    const [input, setInput] = useState();

    const search = (e) => {
        e.preventDefault();
        console.log("you hit the buttton ", input)
    };

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="searchicon"/>
                <input  value={input} onChange={e => setInput(e.target.value)} placeholder="Search Google or type a URL "/>
                <MicIcon/>
            </div>
            <div className="search_buttons">
                <Button type="submit" onclick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I' m Feeling lucky</Button>

            </div>
        </form>
    )
}



export default Search;