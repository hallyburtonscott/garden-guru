import React from "react";
import {Avatar, Badge, Button, makeStyles, Tooltip} from "@material-ui/core";
import {red} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import {Info, InvertColors} from "@material-ui/icons";
import {Link, useRouteMatch} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    good: {
        minWidth: 200,
        maxWidth: 300,
        height: 200,
        backgroundColor: theme.palette.primary[300],
    },
    danger: {
        minWidth: 175,
        maxWidth: 300,
        height: 175,
        backgroundColor: red[400],
    },
    removeTools: {
        display: 'flex',
        flexDirection: 'column',
    }
}))


function PlantIcon({plant, info, plantClick, infoClick, handleRemove}) {
    ////console.log(plant);
    let {path, url} = useRouteMatch();
    ////console.log(url);
    const classes = useStyles();
    const {last_watered, water_rate} = info;
    const time = parseInt(last_watered);
    const difference = (Date.now() - parseInt(last_watered)) / (3600 * 1000);
    const waterMe = difference - water_rate;
    const handlePlantClick = () => {
        plantClick(plant.plant_id);
    }
    return (
        <Badge color='secondary' variant='dot' invisible={true}>
            <Avatar className={(waterMe < 0 ? classes.good : classes.danger)} label={plant.name}>
                {waterMe > 0 && <IconButton onClick={handlePlantClick}>
                    <Tooltip title={'water'} children={<InvertColors/>}/>
                </IconButton>}
                <Typography>
                    {plant.name}
                </Typography>

                <Link to={`./${plant.plant_id}`}> <IconButton onClick={() => infoClick(plant.plant_id)}>
                    <Tooltip title='plant info' children={<Info/>}/>
                </IconButton></Link>
            </Avatar>
            <div className={classes.removeTools}>
                <span> {-waterMe > 0 ? `${-waterMe.toFixed(2)} Hours Remaining` : `${waterMe.toFixed(2)} Hours Late`}</span>
                <Button variant='contained' onClick={()=> handleRemove(plant.plant_id)}> Remove Plant</Button>
            </div>

        </Badge>
    )
}

export default PlantIcon;