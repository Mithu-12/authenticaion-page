import React from 'react';
import useFirebase from "../../Hook/useFirebase";
import { Alert } from '@mui/material';
const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h1>{user?.email && <Alert severity="success">Account Created Succesfully</Alert>
                }</h1>
        </div>
    );
};

export default Home;