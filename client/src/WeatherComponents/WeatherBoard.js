import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, CardContent, makeStyles, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {getWeather} from "../backendRequests";
import {Link} from "react-router-dom";
import {UserContext} from "../App";

function ktoF(temp) {
    const num = (temp - 273.15) * (9 / 5) + 32;
    return num.toFixed(2);
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    weatherHeader: {
        padding: 10,
        backgroundColor: theme.palette.secondary[400],
    },
    weatherBody: {
        padding: 10,
    },
    notFound: {
        backgroundColor: theme.palette.secondary[400],
    }

}));
const WeatherBoard = () => {
    const preferences = useContext(UserContext);
    const [weather, setWeather] = useState(null);
    useEffect(() => {
            getWeather(preferences['zip']).then(res => {
                setWeather(res.data);
                //console.log(res.data);
            })
       //console.log('useEffect')

    }, []);
    const classes = useStyles();
    const [tempType, setTempType] = useState('F');


    if (weather) {
        const {temp, humidity, pressure} = weather.main;
        const {main, description} = weather.weather[0];
        const {speed, gust} = weather.wind;
        const city = weather.name;
        return (
            <Card>
                <Typography variant='h4' className={classes.weatherHeader}>
                    Weather today in {city} </Typography>
                <CardContent>
                    <Typography variant='h6'> {`Temperature: ${ktoF(temp)} ${tempType}`}  </Typography>
                    <Typography variant='h6'> {`Humidity: ${humidity} %`}  </Typography>
                    <Typography variant='h6'> {`Pressure: ${pressure}`}  </Typography>
                    <Typography variant='h6'> {`Currently: ${description}`}  </Typography>
                    <Typography variant='h6'> {`Wind: Speed: ${speed} mph, Gust: ${gust} mph`}  </Typography>
                </CardContent>
            </Card>
        )
    } else {
        return (

            <Paper className={classes.notFound} elevation={2}><Typography variant='h6'>We could not find any
                weather information. Make
                sure your ZIP code is correct</Typography>
                <Link style={{textDecoration: 'none'}} to={`/users/${preferences.username}/info`}><Button
                    variant={'outlined'}> Settings</Button> </Link>
            </Paper>)
    }

}


export default WeatherBoard;