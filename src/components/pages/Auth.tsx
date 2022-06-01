import { MouseEvent, useEffect, useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { signin, signup } from 'src/redux/Auth/authSlice';
import { AppDispatch } from 'src/redux/storeTypes';
import { Endpoints } from 'src/constants';
import { getToken } from 'src/utils/getUserData';

interface State {
  email: string;
  password: string;
  showPassword: boolean;
  isSignUp: boolean;
}

export const Auth: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [values, setValues] = useState<State>({
    email: '',
    password: '',
    showPassword: false,
    isSignUp: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const creds = { password: values.password, email: values.email };
    await dispatch(!values.isSignUp ? signin(creds) : signup(creds));
    if (getToken()) {
      navigate(Endpoints.BOOKS, { replace: true });
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh' }}
    >
      <form onSubmit={onSubmit}>
        <Grid item xs={3}>
          <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
            <InputLabel htmlFor='outlined-ademail'>Email</InputLabel>

            <OutlinedInput
              id='outlined-email'
              type='text'
              value={values.email}
              onChange={handleChange('email')}
              label='Email'
            />
          </FormControl>
        </Grid>{' '}
        <Grid item xs={3}>
          <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>

            <OutlinedInput
              id='outlined-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
        </Grid>{' '}
        <Grid item xs={3}>
          <Button type='submit'>Login</Button>
        </Grid>{' '}
      </form>
    </Grid>
  );
};
