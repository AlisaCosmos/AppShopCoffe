import { TextField } from "@mui/material";

const Search = (props) => {
    const {onChange, value} = props;

    return <TextField 
                sx={{mb: 2, mt: 8}}
                label='search'
                type='search' 
                fullWidth
                variant="standard"
                value={value} 
                onChange={onChange} />   
}

export default Search;