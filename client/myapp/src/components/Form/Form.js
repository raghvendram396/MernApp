import React, { useState } from "react";
import FormControl from '@material-ui/core/FormControl';
import {InputLabel, FormHelperText, Input,Button,Paper, Grid,TextField,Typography} from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { useDispatch, useSelector} from "react-redux";
import {Container} from "@material-ui/core";
import {asynccreatePost} from "../../action/action";


function Form() {
    const [postData,setpostData]=useState({
        creator:"",
        title: "",
        message: "",
        tags: "",
        selectedFiles: "",
    });
    const classes=useStyles();
    const dispatch=useDispatch();
    function clear()
    {
        setpostData({
            creator:"",
        title: "",
        message: "",
        tags: "",
        selectedFiles: "",
        })
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        console.log("Jay ")
        console.log(postData);
     dispatch(asynccreatePost(postData));
     clear();
    }
//     return (
//     <Paper className={classes.paper} >
// <form autoComplete="off" noValidate className={'${classes.root} ${classes.form}'} onSubmit={handleSubmit}>
// <Typography variant="h6" >Creating a memory</Typography>
// <TextField name="creator" variant="outlined" label="Creator" fullWidth value={post.creator} onChange={(event) => setpost({...post, creator: event.target.value})}></TextField>
// <TextField name="title" variant="outlined" label="Title" fullWidth value={post.title} onChange={(event) => setpost({...post, title: event.target.value})}></TextField>
// <TextField name="message" variant="outlined" label="Message" fullWidth value={post.message} onChange={(event) => setpost({...post, message: event.target.value})}></TextField>
// <TextField name="tags" variant="outlined" label="Tags" fullWidth value={post.tags} onChange={(event) => setpost({...post, tags: event.target.value})}></TextField>

// <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setpost({ ...post, selectedFile: base64 })}  /></div>
// <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="Submit" fullWidth>Submit</Button>
// <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button> 

// </form>
// </Paper>)
return <Paper className={classes.paper}>
<form autoComplete="off" noValidate className={'${classes.root} ${classes.form}'} onSubmit={handleSubmit}>
<Typography variant="h6" >Creating a memory</Typography>
<TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(event) => setpostData({...postData, creator: event.target.value})}></TextField>
<TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(event) => setpostData({...postData, title: event.target.value})}></TextField>
<TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(event) => setpostData({...postData, message: event.target.value})}></TextField>
<TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(event) => setpostData({...postData, tags: event.target.value.split(',')})}></TextField>

<div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })} /></div>
<Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="Submit" fullWidth>Submit</Button>
<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

</form>
</Paper>
}

export default Form;