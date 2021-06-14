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
        import { Close as CloseIcon } from "@material-ui/icons"

export default (props) => (
    <Dialog open={!!Object.keys(props.job).length} fullWidth>  
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                Post Job
                <IconButton>
                    <CloseIcon/>
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions></DialogActions>
        </Dialog>
);