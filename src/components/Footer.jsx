import React from 'react'
import { Typography } from '@material-ui/core';
import styles from './../App.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
        <Typography color="textSecondary" gutterBottom >
        &copy; {new Date().getFullYear().toString()} | Covid-19 Tracker created by <a href="https://lbmedia.netlify.com" target="_blank" rel="noopener noreferrer">LB Media</a> | Data API: https://covid19.mathdro.id/api
        </Typography>

        </div>
    )
}

export default Footer 