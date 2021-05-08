import {React, useContext, useState} from 'react';
import {
    Avatar,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    makeStyles,
    TextField
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite'
import AddIcon from '@material-ui/icons/Add';
import {UserContext} from "../App";
import {createPlantConnection} from "../backendRequests";
import {Info} from "@material-ui/icons";

const useStyles = makeStyles((theme) => {
    return ({
        root: {
            maxWidth: 300,
            minWidth: 200,
            minHeight: 400,
        },
        plantAvatar: {
            color: theme.palette.secondary[400],
            backgroundColor: theme.palette.primary[300],
        },
        plantDescription: {

        }


    })
});
const PlantCard = ({plant, notifyUpdate}) => {
    //const {url, info} = image;
    const classes = useStyles();
    const preferences = useContext(UserContext);
    const [schedule, setSchedule] = useState(24);
    const createConnection = () => {
        console.log(plant);
        const attributes = {
            api_id: plant.id,
            custom: true,
            name: plant.attributes.name,
            notes: 'none',
            last_watered: Date.now(),
            water_rate: schedule,
            duration: 60,
        }
        createPlantConnection(preferences.username, attributes).then(notifyUpdate);
    }
    const {binomial_name, name, main_image_path} = (plant ? plant.attributes : {});
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia component='img'
                           alt={binomial_name}
                           image={main_image_path}
                           height={150}>
                </CardMedia>
            </CardActionArea>
            <CardHeader avatar={
                <Avatar className={classes.plantAvatar}>
                    P
                </Avatar>
            } title={name} subheader={binomial_name}>
            </CardHeader>
            <CardContent>
                <Typography className={classes.plantDescription}>
                    Sowing Method: {plant.attributes.sowing_method || 'No method found'}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label='mark favorite'>
                    <FavoriteIcon/>
                </IconButton>
                {(preferences.loggedIn == 'true') && <IconButton onClick={createConnection}>
                    <AddIcon/>
                </IconButton>}

                <IconButton>
                    <Info/>
                </IconButton>
                <Typography>
                    Water every <TextField value ={schedule} onChange={(e)=> setSchedule(e.target.value)}/> Hours
                </Typography>

            </CardActions>
        </Card>
    )
}

export default PlantCard;