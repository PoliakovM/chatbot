import React, { Component, FormEvent } from 'react';
import './login-component.scss';

// import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
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


  interface Props{
    someProps:any,
  }
  
export default class LoginComponent extends Component<Props> {

    constructor(props: any) {
        super(props)
    }


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
                            Sign in
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
                            Sign in
                         </Button>
                        {/* <p className="text-center"><a onClick={() => this.props.history.push("/register")}>Create an Account</a></p> */}
                        <p className="text-center"><a>Create an Account</a></p>
                    </form>
                </Paper>
            </main>
        );
    }
}

