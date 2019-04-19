import React, { Component, FormEvent } from 'react';
import './register.scss';
import { Link, Redirect } from 'react-router-dom';

// import { connect } from 'react-redux'
// import * as actions from '../../actions/actions'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


export default class RegisterComponent extends Component{

    render() {
        return (
                <main className='main'>
                <CssBaseline />
                <Paper className='paper'>
                <div className="sign-logo">
                  <Avatar className='avatar'>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Register
                  </Typography>
                  </div>
                  <form className='form'>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">Email Address</InputLabel>
                      <Input id="email" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input name="password" type="password" id="password" autoComplete="current-password" />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="name">Name</InputLabel>
                      <Input name="name" type="text" id="name" autoComplete="current-name" />
                    </FormControl>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className='submit'
                    >
                      Register
                    </Button>
                  </form>
                </Paper>
              </main>

        );
    }
}

