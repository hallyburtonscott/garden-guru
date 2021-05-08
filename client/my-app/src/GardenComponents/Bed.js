import React from 'react';
import {Chip, Container, GridList, Grid, GridListTile, makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme)=> ({
    root:{
        flexGrow:1,
    }
}));
const Bed = ({plants}) => {
    const classes = useStyles();
    const plantArr = plants.map(plant => {
        return (
            <Grid item key={plant.id}>
                <Chip label={plant.name}/>
            </Grid>
        )

    })

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {plantArr}
            </Grid>
        </div>
    )
}

export default Bed;