import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import firebase from '../Firebase';
import { Container } from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
    btn: {
        width: '100%'
    },
});

const Signup = () => {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            alert("please Enter Value")
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(res => {
                    console.log(res);
                })
                .catch(error => console.log(error));
            setUsername('');
            setEmail('');
            setPassword('');
            alert('Signup Successfully...');
            history.push('/login');
        }
    }

    const classes = useStyles();

    return (
        <Container>
            <Grid>
                <Grid align="center">
                    <LockOpenIcon style={{ background: 'lightpink', fontSize: '50px', borderRadius: '50%', padding: '5px',marginTop:"5px" }} />
                    <h2>Signup/Signin</h2>
                </Grid>
                <form>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Username*"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} /><br /><br />
                    <TextField fullWidth
                        variant="outlined"
                        label="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Password*"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} /><br /><br />
                    <Button type="submit"
                        variant="contained"
                        color="primary"
                        className="btn btn-block" onClick={handleSignup}>Sign Up</Button>
                </form>
            </Grid>
        </Container>

    );
}

export default Signup;
