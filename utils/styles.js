import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar:{
    backgroundColor: '#3600B3',
    '& a': {
      color: '#FECC00',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    backgroundColor: '#3600B3',
    padding: '50px',
    textAlign: 'center',
    margin: 'auto',
    color: 'white',
  },
});
export default useStyles;