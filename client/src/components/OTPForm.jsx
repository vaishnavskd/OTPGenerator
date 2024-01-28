import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import '../App.css';

const OTPForm = ({ handleOTSubmit }) => {
    const [otp, setOTP] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleOTSubmit(otp);
    };

    return (
        <div className='App'>
            <Typography variant='h4'>OTP Validation</Typography>
            <br />
            <Grid container columns={2} spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        label="Enter OTP"
                        variant="outlined"
                        value={otp}
                        onChange={(e) => setOTP(e.target.value)}
                        aria-label="Enter OTP"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Button variant="contained" onClick={handleSubmit} aria-label="Submit OTP">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default OTPForm;
