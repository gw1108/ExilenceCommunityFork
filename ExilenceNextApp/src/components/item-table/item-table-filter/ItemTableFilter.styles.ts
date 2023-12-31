import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  searchField: {
    width: '100%',
    marginTop: theme.spacing(0.5),
  },
  clearIcon: {
    marginRight: theme.spacing(-0.5),
  },
  inputField: {
    fontSize: '0.875rem',
  },
  grow: {
    display: 'flex',
    flex: 1,
    maxWidth: 350,
  },
}));

export default useStyles;
