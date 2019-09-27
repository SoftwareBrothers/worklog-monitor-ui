import React from 'react'
import TextField from '@material-ui/core/TextField';


const SearchBar = () => {
    return(
        <div>
            <form>
            <TextField
                id="standard-search"
                label="Search field"
                type="search"
                className={'MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl'}
                margin="normal"
            />
            </form>
        </div>
    );
};

export default SearchBar;
