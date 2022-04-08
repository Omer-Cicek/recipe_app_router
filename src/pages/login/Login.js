import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { AccountCircle } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';
import loginStyling from './style';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles(loginStyling);

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //when onClick, show user homepage
  const loginHandler = () => {
    if (username.length <= 0 && password.length <= 0) {
      toast.error('Invalid username and password!');
    } else if (username.length <= 0) {
      toast.error('Invalid username!');
    } else if (password.length <= 0) {
      toast.error('Invalid password!');
    } else if (username.length > 0 && password.length > 0) {
      navigate('/');
      toast.success('Successfully entered the website!');
    }
    setPassword('');
    setUsername('');
  };

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <ToastContainer />
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          className={classes.textfield}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          className={classes.textfield}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Box>
      {
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            loginHandler();
          }}
        >
          Sign In
        </Button>
      }
    </Box>
  );
};

export default Login;
