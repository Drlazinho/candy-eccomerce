import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  layoutColor:{
    backgroundColor: '#FBF3DF',
  },
  navbar:{
    backgroundColor: '#3600B3',
    '& a': {
      color: '#FECC00',
      marginLeft: 10,
    },
  },
  brand:{
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow:{
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  footer: {
    backgroundColor: '#3600B3',
    padding: '50px',
    marginTop: '2rem',
    textAlign: 'center',
    margin: 'auto',
    color: 'white',
  },
});
export default useStyles;