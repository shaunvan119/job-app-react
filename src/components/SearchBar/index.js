import React, { useState } from 'react';
import { Box, Button, Select, MenuItem, makeStyles } from '@material-ui/core'

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

export default (props) => {
    const [jobSearch, setJobSearch] = useState({
        type: "Full time",
        location: "Remote",
    });

    const handleChange = (e) => {
        e.persist();
        setJobSearch((oldState) => ({ 
            ...oldState, 
            [e.target.name]: e.target.value,
        }));
    };

    console.log(jobSearch);

    const classes = useStyles();
    return (
        <Box p={2} mt={-5} mb={2} className= {classes.wrapper}>
            <Select onChange={handleChange} value={jobSearch.type} name="type" disableUnderline variant="filled">
                <MenuItem value="Full time">Full Time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            <Select onChange={handleChange} value={jobSearch.location} name="location" disableUnderline variant="filled">
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
            </Select>
            <Button variant="contained" color="primary" disableElevation>
                 Search
            </Button>
        </Box>
    );

}