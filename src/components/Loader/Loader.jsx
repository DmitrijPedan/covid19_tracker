import React from 'react';
import {CircularProgress} from '@material-ui/core';
import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className = {styles.container}>
            <CircularProgress color="secondary" />
        </div> 
    )
}

export default Loader;