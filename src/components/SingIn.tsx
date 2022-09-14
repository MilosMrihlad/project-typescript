import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from '@firebase/util';
import { auth } from 'src/firebase';

type ErrorCode = 'auth/wrong-password' | 'auth/invalid-email' | undefined;

export default function SignIn() {
    const theme = createTheme();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<ErrorCode>();

    function handleLogin() {
        const trimetEmail = email.trim();
        const trimetPassword = password.trim();

        if (trimetEmail.length || trimetPassword.length) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    setError(undefined);
                })
                .catch((e) => {
                    console.log(e.code);
                    const firebaseError = e as FirebaseError;
                    const errorMessage = firebaseError.code as ErrorCode;
                    setError(errorMessage);
                });
        }
    }
    /*
    async function handleLogin2() {
        const trimetEmail = email.trim();
        const trimetPassword = password.trim();

        if (trimetEmail.length || trimetPassword.length) {
            try {
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                // Signed in
                const user = userCredential.user;
                console.log(user);
                setError(false);
            } catch (e) {
                setError(true);
            }
        } else {
            setError(true);
        }
    }
*/
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Příhlášení
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            error={error === 'auth/invalid-email'}
                            helperText={
                                error === 'auth/invalid-email'
                                    ? 'Zadal jste špatný email !'
                                    : null
                            }
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Emailová adresa"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            error={error === 'auth/wrong-password'}
                            helperText={
                                error === 'auth/wrong-password'
                                    ? 'Zadal jste špatné heslo !'
                                    : null
                            }
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Heslo"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Zapamatuj si mě"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleLogin}
                        >
                            Příhlásit
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="zapomenute-heslo">
                                    Zapomenuté heslo?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/registrace">
                                    {'Ještě nemáš registraci ? Registrovat se'}
                                </Link>
                            </Grid>
                            {error && (
                                <span>Zadal jsi špatně email nebo heslo !</span>
                            )}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
