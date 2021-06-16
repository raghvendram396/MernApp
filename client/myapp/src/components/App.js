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
import MenuIcon from '@material-ui/icons/Menu';

function App() {
 
  const classes = useStyles();
const dispatch=useDispatch();
useEffect(() => {
  dispatch(asyncfetchPost());
},[dispatch]);
const posts=useSelector(state => state);
  console.log("Ye app");
  console.log(posts);

function createPost(post){
  return (
  <div>
    <h1>{post.title}</h1>
    <h2>{post.message}</h2>
    </div>
    );
}
  return (
    <Container maxwidth="lg">
    <AppBar className={classes.appbar} position="static">
    <Typography variant="h2" align="center" color="primary">Memories</Typography>
    </AppBar>
    
    {posts.map(createPost)}
    </Container> 
  );
}

export default App;
