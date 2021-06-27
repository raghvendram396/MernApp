import React, { useEffect } from "react";
import {useDispatch} from "react-redux";
import { asyncfetchPost } from "../action/action";
import {useSelector} from "react-redux";
import {Container} from "@material-ui/core";
import  useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Grid ,Grow} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Form from "../components/Form/Form";
import RecipeReviewCard from "./RecipeReviewCard";
import {CircularProgress} from "@material-ui/core";

function App() {
 
  const classes = useStyles();
const dispatch=useDispatch();
useEffect(() => {
  dispatch(asyncfetchPost());
},[dispatch]);
 const posts=useSelector(state => state);
  console.log("Ye app");
  console.log(posts);

function createPot(post){
  return (
    <Grid item xs={12} sm={6}>
   <RecipeReviewCard likeCount={post.likeCount} id={post._id} creator={post.creator} title={post.title} message={post.message} selectedFile={post.selectedFile} tags={post.tags}/>
    </Grid>);
}
  return (
    <Container maxwidth="lg">
    <AppBar className={classes.appbar} position="static">
    <Typography variant="h2" align="center" color="primary">Memories</Typography>
    </AppBar>\
    <Grow in>
    <Container>
    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid xs={12} sm={7}>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.length==0?<CircularProgress />:posts.map(createPot)}
        </Grid>
        </Grid>
    <Grid xs={12} sm={4} >
           <Form className={classes.formWala}/>           
           </Grid>
           </Grid>
    </Container>
    </Grow>
    </Container> 
 
    );

}

export default App;
