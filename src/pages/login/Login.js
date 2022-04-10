//import material ui
import { Box, Button, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';
// import css styles
import { makeStyles } from '@mui/styles';
import loginStyling from './style';
//import hooks
import { useState } from 'react';
//import react router
import { useNavigate } from 'react-router';
//import toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles(loginStyling);

//component
const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //Click function that show homepage when validation true ( with toastify )
  const loginHandler = () => {
    if (username.length <= 0 && password.length <= 0) {
      toast.error('Invalid username and password!');
    } else if (username.length <= 0) {
      toast.error('Invalid username!');
    } else if (password.length <= 0) {
      toast.error('Invalid password!');
    } else if (username.length > 0 && password.length > 0) {
      sessionStorage.setItem('user', JSON.stringify(username));
      navigate('/home');
      toast.success('Successfully entered the website!');
    }
    setPassword('');
    setUsername('');
  };

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* username textField */}
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
      {/* password textField */}
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
      {/* button triggers loginHandler Func */}
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => {
          loginHandler();
        }}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default Login;
