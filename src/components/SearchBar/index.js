import React, { useState } from 'react';
import { Box, Button, Select, MenuItem, makeStyles, CircularProgress } from '@material-ui/core'


/* importing theme from UI theme folder, containing the Grid, Box, Typo, Button*/
const useStyles = makeStyles({
    wrapper:{
        border: "1px solid grey",
        backgroundColor: "#fff",
        display: "flex",
        boxShadow: "Opx 1px 5px rgba(0, 0, 0.1)",
        borderRadius: "5px",
        "& > *": {
            flex: 1,
            height: "45px",
            margin: "8px",
        },
    },
});
/* functional componenet for the search bar*/
export default function SearchBar(props)  {
    const [loading, setLoading] = useState(false)
    const [jobSearch, setJobSearch] = useState({
        type: "Full time",
        location: "VIC",
    });

    const handleChange = (e) => {
        e.persist();
        setJobSearch((oldState) => ({ 
            ...oldState, 
            [e.target.name]: e.target.value,
        }));
    };

    const search = async () => {
        setLoading(true);
        await props.fetchJobsCustom(jobSearch)
        setLoading(false);
    };

    const classes = useStyles(); /* funtional component to pass in line 6 UI Stryles*/
    return (
        <Box p={2} mt={-5} mb={2} className= {classes.wrapper}> {/* Search bar*/}
            <Select onChange={handleChange} value={jobSearch.type} name="type" disableUnderline variant="filled">
                <MenuItem value="Full time">Full Time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            <Select onChange={handleChange} value={jobSearch.location} name="location" disableUnderline variant="filled">
                <MenuItem value="VIC">VIC</MenuItem>
                <MenuItem value="ACT">ACT</MenuItem>
                <MenuItem value="NSW">NSW</MenuItem>
                <MenuItem value="QLD">QLD</MenuItem>
                <MenuItem value="NT">NT</MenuItem>
                <MenuItem value="WA">WA</MenuItem>
                <MenuItem value="SA">SA</MenuItem>
                <MenuItem value="TAS">TAS</MenuItem>
            </Select>
            <Button 
            disabled={loading} 
            variant="contained" 
            color="primary" 
            disableElevation
            onClick={search}
            >
            {loading ? (
            <CircularProgress color="secondary" size={22}/>
            ) : (
            "Search"
            )}
            </Button>
        </Box>
    );

}