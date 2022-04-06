import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { AccountCircle } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#00ADB5',
    color: 'red ',
    gap: '10px',
  },
  button: {
    '&.MuiButton-contained': {
      color: '#333',
    },
    '&.MuiButton-root': {
      backgroundColor: '#E0F1DD',
    },
    '&.MuiButton-root:hover': {
      backgroundColor: '#e3ffde',
    },
  },

  textfield: {
    width: '100%',

    '& input': {
      color: 'white',
    },

    '& label': {
      color: 'white',
    },

    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    },
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Username"
          variant="outlined"
          className={classes.textfield}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Password"
          variant="outlined"
          type="password"
          className={classes.textfield}
        />
      </Box>
      <Button variant="contained" className={classes.button}>
        Sign In
      </Button>
    </Box>
  );
};

export default Login;
