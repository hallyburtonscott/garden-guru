import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, CardContent, CardHeader, makeStyles, Paper, Typography} from "@material-ui/core";
import WeatherBoard from "../WeatherComponents/WeatherBoard";
import NewsFeed from "../MiddleComponents/NewsFeed";
import {UserContext} from "../App";
import {Link} from "react-router-dom";
import {getUserPlantConnections, getUserPlants} from "../backendRequests";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        backgroundColor: theme.custom.background[200],
    },
    header: {
        backgroundColor: theme.palette.primary[400],
        margin: 20,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 30,
        maxHeight: 900,
    },
    loginHeader: {
        backgroundColor: theme.palette.primary[400],
    },
    news: {
        overflow: 'scroll',
    },
    loginRequest: {
        maxHeight: 300,
        maxWidth: 300,
    },
    weatherBoard:{
        maxHeight: 600,
    },
    toolBar:{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-evenly',
        justifyContent: 'space-evenly',
    },
    notifications: {
        maxHeight: 500,
        overflow: 'scroll',
    },


}));

const LoginRequest = () => {
    const classes = useStyles();
    return (
        <Card className={classes.loginRequest}>
            <CardHeader className={classes.loginHeader}
                        title=' Create your Account Today'/>
            <CardContent>
                <Typography variant='h5'>
                    Enjoy Full Access to the Gardening Database and Water Monitoring.
                </Typography>
                <Link to='/signup' style={{'textDecoration': 'none'}}><Button variant='contained'> Sign Up</Button> </Link>
            </CardContent>
        </Card>
    )
}
const Notifications = () => {
    const preferences = useContext(UserContext);
    const [plantConnections, setPlantConnections] = useState({});
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
    const classes = useStyles();
    let connections;
    if(plantConnections.connections){
        connections = plantConnections.connections;
        connections =  connections.filter(plant => {
            const difference = (Date.now() - parseInt(plant['last_watered'])) / (3600 * 1000);
            const waterMe = difference - plant.water_rate;
            return waterMe > 0;
        });
    }

    return (
        <Card className={classes.notifications}>
            <CardHeader className={classes.loginHeader}
                        title='Notifications'/>
            <CardContent>
                <Typography variant='h5'>
                    {connections && (connections.length > 0 ? <div>
                        {`You need to water the following plant${connections.length == 1 ? '': 's'}`}:
                        <ol>
                            {connections.map(plant=> <li key={plant.plant_id}>{plantConnections.plants.find(p => p.plant_id == plant.plant_id)['name']} </li>)}
                            </ol>
                       Take a break and water your plants!
                    </div>:<div> You're garden is all good :)</div> )}
                </Typography>
            </CardContent>
        </Card>
    )
}
const Home = ({}) => {
        const preferences = useContext(UserContext);
        const classes = useStyles();
        return (
            <div className={classes.root}>
                <Paper className={classes.header} elevation={3}>
                    <Typography variant='h1'>Garden Guru</Typography>
                    <Typography variant='h3'>Your Central Gardening Hub</Typography>
                </Paper>
                <div className={classes.content}>
                    <div className={classes.news}>
                        <NewsFeed/>
                    </div>
                    <div className={classes.toolBar}>
                        {(preferences.loggedIn ? <div className={classes.weatherBoard}> <WeatherBoard/></div> : <LoginRequest/>)}
                        <div className={!classes.notifications}>
                            <Notifications />
                        </div>

                    </div>

                </div>
            </div>
        );
    }

;

export default Home;