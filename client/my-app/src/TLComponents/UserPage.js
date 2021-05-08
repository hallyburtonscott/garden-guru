import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../App";
import {
    deleteUserPlant,
    getUserPlantConnections,
    getUserPlants,
    getWeather,
    updatePlantConnection
} from "../backendRequests";
import {Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {Link, useRouteMatch} from "react-router-dom";
import Garden from '../GardenComponents/Garden'
import WeatherBoard from "../WeatherComponents/WeatherBoard";
import PlantStore from "./PlantStore";


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 1200,
    },
    header: {
        margin: 50,
    },
    toolGrid: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    notFound: {
        backgroundColor: theme.palette.secondary[200],
    }
}));
const UserPage = (props) => {
    let {path, url} = useRouteMatch();
    const classes = useStyles();
    const [plantConnections, setPlantConnections] = useState({});
    // const [connections, setConnections] = useState([]);
    const [weather, setWeather] = useState(null);
    const [plantStore, setPlantStore] = useState(true);
    const preferences = useContext(UserContext);
    const {username, email, phone} = preferences;


    const getData = () => {
        getUserPlantConnections(preferences.username).then(res => {
            if (res && res.data != null) {
                getUserPlants(res.data.map(plant => plant['plant_id'])).then(res2 => {
                    setPlantConnections({
                        plants: res2.data,
                        connections: res.data,
                    })
                    // setConnections(res.data);
                    // setPlants(res2.data);
                });
            }
        })
    }
    useEffect(() => {
        getData();
    }, []);
    //console.log('I reloaded');
    return (
        <div className={classes.root}>
            <Typography variant='h2' className={classes.header}>
                Welcome to your garden, {username}
            </Typography>
            <Grid container spacing={2} className={classes.toolGrid}>
                <Grid item>
                   <WeatherBoard />
                </Grid>
                <Grid item>
                    <Garden plants={plantConnections.plants} connections={plantConnections.connections}
                            handleUpdate={(plant_id) => {
                                updatePlantConnection(preferences.username, plant_id, Date.now()).then(getData);
                            }} handleRemove={(id) => {
                        deleteUserPlant(preferences.username, id).then(getData);
                    }}/>
                </Grid>

            </Grid>

            {plantStore && <PlantStore notifyUpdate={getData}/>}
        </div>
    )

}

export default UserPage;