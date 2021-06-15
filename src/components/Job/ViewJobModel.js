import React from "react";
import { Box, 
        Grid, 
        FilledInput, 
        Select, 
        MenuItem, 
        Dialog, 
        DialogTitle, 
        DialogContent, 
        DialogActions, 
        makeStyles, 
        Typography, 
        Button, 
        IconButton, 
        CircularProgress } from "@material-ui/core";
        import { Close as CloseIcon } from "@material-ui/icons";
        import { format } from "date-fns";


        const useStyles = makeStyles({
            info: {
                '& > *' : {
                    margin: '5px'
                }
            }
        })

export default (props) => {
    const classes = useStyles()

    return (
    <Dialog open={!!Object.keys(props.job).length} fullWidth>  
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                {props.job.title} @ {props.job.companyName}
                <IconButton>
                    <CloseIcon/>
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Box>
              <Box className={classes.info} display= "flex">
                  <Typography variant="caption">Posted on:</Typography>
                  <Typography variant="body2">
                  {props.job.postedOn && 
                  format(props.job.postedOn, "dd/MMM/yyy HH:MM")}
                  </Typography>
              </Box>  
            </Box>
        </DialogContent>
        <DialogActions></DialogActions>
        </Dialog>
);
}