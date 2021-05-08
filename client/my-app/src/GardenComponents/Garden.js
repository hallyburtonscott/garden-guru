import React, {useContext, useState} from 'react';
import {Card, CardContent, Grid, makeStyles, Typography} from "@material-ui/core";
import PlantIcon from './PlantIcon';
import {UserContext} from "../App";
import {useRouteMatch} from "react-router-dom";
import PlantPage from "./PlantPage";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    gardenHeader: {
        padding: 10,
        backgroundColor: theme.palette.primary[200],
    },
    gardenBody: {
        padding: 10,
    },
    cardInfo: {
        display: 'flex',
        flexDirection: 'row',
    }

}));


const Garden = ({plants = [], connections, handleUpdate, handleRemove}) => {
    const classes = useStyles();
    let {path, url} = useRouteMatch();
    const preferences = useContext(UserContext);
    //const [info, setInfo] = useState(`${path}/0`);
    const [ids, setIds] = useState([]);
    const handleInfoClick = (id) => {
        setIds(prev => {
            let copy = [...prev];
            if (copy.includes(id)) {
                return prev;
            } else {
                copy.push(id);
                return copy;
            }

        })
    }
    const clear = (id) => {
        setIds(prev => {
            let copy = [...prev];
            copy.splice(copy.findIndex(e => e == id), 1);
            return copy;
        })

    }

    return (
        <Card className={classes.root}>
            <Typography variant='h4' className={classes.gardenHeader}>
                My Garden
            </Typography>
            <CardContent>
                <Grid className={classes.gardenBody} container spacing={3}>
                    {(plants.length > 0 ? plants.sort((a, b) => a.name.localeCompare(b.name)).map(plant => {
                        return (
                            <Grid item key={plant.plant_id}>
                                <PlantIcon plant={plant} info={connections.find(e => e.plant_id == plant.plant_id)}
                                           plantClick={handleUpdate} infoClick={handleInfoClick}
                                           handleRemove={handleRemove}/>
                            </Grid>)
                    }) : <div> No plants to share :( </div>)}
                </Grid>
            </CardContent>
            <CardContent className={classes.cardInfo}>
                {ids.length > 0 && ids.map(id =>
                    <PlantPage key={id} id={id} clear={clear}/>
                )}
            </CardContent>

            {/*<CardActions>*/}
            {/*    <Tooltip title={'Water All'}>*/}
            {/*        <IconButton>*/}
            {/*            <InvertColors/>*/}
            {/*        </IconButton>*/}
            {/*    </Tooltip>*/}
            {/*</CardActions>*/}

        </Card>
    );

}


export default Garden;