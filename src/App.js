import React, { useState, useEffect } from "react"; /* use effect is triggered on every render, use state hook is used to implement the state with in the finction componenets in react */
import { Box, Grid, ThemeProvider, Typography, CircularProgress, Button } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header/";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import NewJobModel from "./components/Job/NewJobModel";
import { firestore, app } from "./firebase/config";
import { Close as CloseIcon } from "@material-ui/icons"
import ViewJobModel from "./components/Job/ViewJobModel";


export default () => {
const [jobs, setJobs] = useState([]); /* array of jobs and setJobs allows us to change the state */
const [loading, setLoading] = useState(true); /* shows the user the page is loading */
const [customSearch, setCustomSearch] = useState(false);
const [newJobModel, setNewJobModel] = useState(false)
const [viewJob, setViewJob] = useState({});

/* Fecthing the jobs from firebase and returning a array */
const fetchJobs = async () => {
    setCustomSearch(false)
    setLoading(true);
    const req = await firestore
    .collection("jobs") /* calling the Job collection */
    .orderBy("postedOn", "desc") /* fecth jobs by order decending order */
    .get();
  /* fecting the jobs and looping over array and returning the data */  
const tempJobs = req.docs.map((job) => ({
    ...job.data(), /* spreading the job and returninf the job ID from firebase */
    id: job.id, 
    postedOn: job.data().postedOn.toDate(), /* calling the Jod ID and the posted on time stamp displayed on the page */
}));
setJobs(tempJobs); /* calling the array from firebase */
setLoading(false);
};

const fetchJobsCustom = async (jobSearch) => {
    setLoading(true);
    setCustomSearch(true);
    const req = await firestore
    .collection("jobs")
    .orderBy("postedOn", "desc")
    .where("location", '==', jobSearch.location)
    .where("type", '==', jobSearch.type)
    .get();
const tempJobs = req.docs.map((job) => ({
    ...job.data(), 
    id: job.id, 
    postedOn: job.data().postedOn.toDate(), 
}));
setJobs(tempJobs);
setLoading(false);

}

/* passing jobs as a argument and making a request to save it in firestore, importing from 
firebase config file*/
const postJob = async jobDetails => {
    await firestore.collection('jobs').add({
        ...jobDetails,
        postedOn: app.firestore.FieldValue.serverTimestamp(),
    });
    fetchJobs();
};

/* Fecthing the jobs from firebase and returning a array 
takes in two argument, first argument is triggered on evey render,
secound argument is a dependency that makes the decision on weatrher 
or not it should be rendered*/
useEffect(() => {
    fetchJobs(); /* function is called when the user opens the web page */
}, []);

 return (
 <ThemeProvider theme={theme}> {/* importing theme from UI theme folder */}
 <Header openNewJobModel={() => setNewJobModel(true)}/>
 <NewJobModel 
 closeModel={() => setNewJobModel(false)} 
 newJobModel={newJobModel} 
 postJob={postJob}  /* passing in prop postjob from line 59*/
 />
 <ViewJobModel job={viewJob} closeModel={() => setViewJob({})} />
 <Box mb={3}>
 <Grid container justify="center">
 <Grid item xs={10}>
 <SearchBar fetchJobsCustom={fetchJobsCustom} />

 {loading ? ( 
     <Box display="flex" justifyContent="center">
 <CircularProgress />
     </Box>
     ) : ( 
         <>
         {customSearch && (
         <Box my={2} display="flex" justifyContent="flex-end">
             <Button onClick={fetchJobs}>
             <CloseIcon size={20} />
             Custom Search
             </Button>
         </Box>
         )}
      {jobs.map((job) => ( 
          <JobCard open={() => setViewJob(job)} key={job.id} {...job} />
        ))}
      </>
      )}
 </Grid>
 </Grid>
 </Box>
 </ThemeProvider>
 );
};



