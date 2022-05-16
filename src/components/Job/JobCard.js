import React from "react";
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { differenceInMinutes } from 'date-fns' /* date formating function for line 61*/



/* Jobcard is for the search results*/
/* importing theme from UI theme folder, for the search results */
/* below is a function calling theme to access the theme object folder*/


const useStyles = makeStyles((theme) => ({
    wrapper: {
    border: '1px solid #e8e8e8',
    cursor: "pointer",
    transition:'.3s',
/* when cursor hovers over the job it changes the below styling */
    "&:hover": { 
        boxShadow: "0px 5ps 25px rgba(0, 0, 0, 0.1)",
        borderLeft: "6px solid #4D64E4",
    },
    },
    companyName: {
     fontSize: "13.5px",
     backgroundColor: theme.palette.primary.main,
     padding: theme.spacing(0.75),
     borderRadius: "5px",
     display: "inline-block",
     fontWeight: 600,
    },
    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    },
}));

export default function JobCard(props) {
    const classes = useStyles()
    return (
        <Box p={2} className={classes.wrapper}> {/* wrapper line 5 class name */}
           <Grid container alignItems="center">
           <Grid item xs>
                <Typography variant="subtitle1">{props.title}</Typography>
                <Typography className={classes.companyName} variant="subtitle1">{props.companyName}</Typography>
            </Grid>
            <Grid item container xs>
                {props.skills.map((skill) => ( /* skills are being passed down as props*/
                    <Grid key={skill} className={classes.skillChip} item>  {/* Accessing Skillship line 31 */}
                    {skill}
                    </Grid>
                    ))}
            </Grid>
            <Grid item container direction="column" alignItems="flex-end" xs>
            <Grid item>
                <Typography variant="caption">
                  {differenceInMinutes(Date.now(), props.postedOn)} min ago | {props.type} | {props.location} {/*passing props to display time, location and type in the serach return results*/}
                </Typography>
                </Grid>
                <Grid item>
                <Box mt={2}> {/* Margin for the view button*/}
                <Button onClick={props.open} variant="outlined">View</Button>
                </Box>
                </Grid>
            </Grid>
        </Grid>
        </Box>
    );
};