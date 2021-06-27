import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  paper: {
    padding: theme.spacing(2),
    position:"absolute",
    top: "150px",
    right:"5%",
    width: "30%"
  },
  [theme.breakpoints.down("xs")]: {
   paper: {
     position: "relative",
     top: "20px",
     width: "80%",
     left: "6px"
   }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));