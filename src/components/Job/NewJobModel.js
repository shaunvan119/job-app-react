import React, { useState } from "react"; /*The useState() Hook that allows you to have state variables in functional components*/
import { Box, 
         Grid, 
         FilledInput, 
         Select, 
         MenuItem, 
         Dialog, 
         DialogTitle, 
         DialogContent, 
         DialogActions, 
         makeStyles, /* Allow to creat a style sheet*/
         Typography, 
         Button, 
         IconButton,  /* Icon button is our cross button used to close the new job window*/
         CircularProgress } from "@material-ui/core";

import { Close as CloseIcon } from '@material-ui/icons' /* cross button import from icon button*/

/* New Job model is for posting of the Job*/

/* Style sheet function for skill chips, funtion was used to call theme, rather then creating a object*/
const useStyles = makeStyles ((theme) => ({
    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        cursor: "pointer",
/* hover over event, skill chip changes color when cursure hovers over*/
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: "#fff",
        }
    },
    included: {
        backgroundColor: theme.palette.secondary.main,
            color: "#fff",
    }
}));

const initState = {
    title:"",
        type:"Full time",
        companyName:"",
        companyUrl:"",
        location:"Remote",
        link:"",
        description:"",
        skills: [],
};


export default (props) => {
    const [loading, setLoading] = useState(false)
    const [jobDetails, setJobDetails] = useState(initState);
/* Handling the change to the above state and overiding, and target.name
to the below titles, the purpusde is to change the fields with in the
new job post*/
    const handleChange = (e) => {
        e.persist();
        setJobDetails((oldState) => ({ 
            ...oldState, 
            [e.target.name]: e.target.value,
        }));
    };
/* Passing the skill as a argument from line 52, then checking if we need to add or remove
old array for skills*/
    const addRemoveSkill = (skill) => 
        jobDetails.skills.includes(skill)
        ? setJobDetails((oldState) => ({ 
            ...oldState, 
            skills: oldState.skills.filter((s) => s === skill),
        }))
        : setJobDetails((oldState) => ({ 
            ...oldState, 
            skills: oldState.skills.concat(skill),
        }));
/* passing on from line 81 in App.js to a handle change, this is called 
on line 240 when the user submits the button*/
    const handleSubmit = async () => {
        for (const field in jobDetails) {
            if(typeof jobDetails[field] === 'string' && !jobDetails[field]) return;   
        }
        if(!jobDetails.skills.length) return;
        setLoading(true);
        await props.postJob(jobDetails);
        closeModel();
    };

    const closeModel = () => {
        setJobDetails(initState)
        setLoading(false);
        props.closeModel();

    };

    
    const classes = useStyles(); /* Hook function to use styles from line 22 */
    const skills = [
        "Cert III Fitness",
        "Cert IV Fitness",
        "First Aid",
        

    ];

    /* components for displaying 
    -Dialog wraps the below model and contains the whole new job model 
    -Dialog title, displays the DialogTitle (post Job)
    -Dialog Content contains the main grid and further grid components for the job listing
    -Dialog actions 
    */
    return (
        <Dialog open={props.newJobModel} fullWidth>  
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                Post Job
                <IconButton onClick={closeModel}> {/* close icon button*/}
                    <CloseIcon/>
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Grid container spacing={2}>
            <Grid item xs={6}>
            <FilledInput
            onChange={handleChange} 
            name="title"
            value={jobDetails.title}
            autoComplete="off"
            placeholder="Job title *" 
            disableUnderline 
            fullWidth />
            </Grid>
            <Grid item xs={6}>
            <Select
            onChange={handleChange}
            fullWidth
            name="type"
            value={jobDetails.type}
            disableUnderline 
            variant="filled" 
            >
                <MenuItem value="Full time">Full Time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={6}>
            <FilledInput              
            onChange={handleChange}
            name="companyName"
            value={jobDetails.companyName}
            autoComplete="off"
            placeholder="Company name *" 
            disableUnderline 
            fullWidth 
            />
            </Grid>
            <Grid item xs={6}>
            <FilledInput
            onChange={handleChange}
            name="companyUrl"
            value={jobDetails.companyUrl}
            autoComplete="off"
            placeholder="Company URL *" 
            disableUnderline 
            fullWidth 
            />
            </Grid>
            <Grid item xs={6}>
            <Select
            onChange={handleChange}
            name="location"
            value={jobDetails.location}
            fullWidth 
            disableUnderline 
            variant="filled" 
            >
                <MenuItem value="VIC">VIC</MenuItem>
                <MenuItem value="ACT">ACT</MenuItem>
                <MenuItem value="NSW">NSW</MenuItem>
                <MenuItem value="QLD">QLD</MenuItem>
                <MenuItem value="NT">NT</MenuItem>
                <MenuItem value="WA">WA</MenuItem>
                <MenuItem value="SA">SA</MenuItem>
                <MenuItem value="TAS">TAS</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={6}>
            <FilledInput
            onChange={handleChange}
            name="link"
            value={jobDetails.link}
            autoComplete="off"
            placeholder="Job Link *" 
            disableUnderline 
            fullWidth 
            />
            </Grid>
            <Grid item xs={12}>
            <FilledInput
            onChange={handleChange}
            name="description"
            value={jobDetails.description}
            autoComplete="off"
            placeholder="Job Desription *" 
            disableUnderline 
            fullWidth
            multiline
            rows={4}
            />
            </Grid>
            </Grid> 
            <Box mt={2}>                     {/* Box which containes the skills*/}
            <Typography>Skills*</Typography>  {/* Material-UI component used to standardize the text and its related CSS properties*/}
            <Box display="flex">              {/* Box component that displays the skill chips*/}
                {skills.map((skill) => (       /* Array which maps over each skill box*/
                    <Box 
                    onClick={() => addRemoveSkill(skill)} 
                    className={`${classes.skillChip} 
                    ${jobDetails.skills.includes(skill) && classes.included}`} 
                    key={skill}>{skill}</Box>
                ))}
            </Box>
            </Box>
        </DialogContent>
        <DialogActions>
        <Box color="red" 
             width="100%" 
             display="flex" 
             justifyContent="space-between"
             alignItems="center"
             >
            <Typography variant="caption">*Required fields</Typography>
            <Button                              /* Button and function for post job*/
            onClick={handleSubmit} 
            variant="contained"                 
            disableElevation                    /* disabling box shadow from Materail UI*/
            color="primary"
            disabled={loading}> 
            {loading ? (
            <CircularProgress color="secondary" size={22}/>
            ) : (
            "Post Job"
            )}
            </Button>
        </Box>
        </DialogActions>
        </Dialog>
    );
};