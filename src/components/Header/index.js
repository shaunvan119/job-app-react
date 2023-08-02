import React from 'react';
import { Box, Grid, Button } from '@material-ui/core'
import companyLogo from "../../assets/logo.png"
import "./header.css"



/* importing theme from UI theme folder, containing the Grid, Box, Typo, Button*/
export default function  Header(props)  {
    
    return (
<Box py={15} bgcolor="#A8A4E6" color="white">
    <Grid container justify="center">
    <Grid item xs={10}>
    <Box display="flex" justifyContent="space-between">
    <img className="logo" src={companyLogo} alt="BigCo Inc. logo"/>
    <Button
    onClick={props.openNewJobModel} 
    variant="contained" 
    color="primary" 
    style={{ height: '50px' }}
    disableElevation>
    
    Post a Job
    </Button>
    </Box>
    </Grid>
    </Grid>
</Box>


)};