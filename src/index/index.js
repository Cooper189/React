import React from 'react';
import Button from '../classes/Button';
import Grid from '../classes/Grid'

export default function index(type, screen) {
    console.log('index', type, screen);
    switch(type.id) {
        case 'button':
            return <Button screenId={screen}></Button>
        case 'grid':
            return <Grid screenId={screen}></Grid>
        default:
            return
    }
}