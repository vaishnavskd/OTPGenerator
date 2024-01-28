import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import '../App.css';
const EmailForm = ({ handleEmailSubmit }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEmailSubmit(email);
    };

    return (
        <div className='App' style={{ margin: '10%', padding: '7%' }}>
            <Typography variant='h4'>Generate OTP</Typography>
            <br />
            <Grid container columns={2} spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default EmailForm;
