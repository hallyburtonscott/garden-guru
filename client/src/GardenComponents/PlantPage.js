import React, {useEffect, useState} from 'react';
import {
    Avatar,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton, Link,
    makeStyles
} from "@material-ui/core";
import {useParams, useHistory} from 'react-router-dom'
import {getPlantByAPI, getUserPlants} from "../backendRequests";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {Clear, Delete} from "@material-ui/icons";


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
        plantDescription: {}


    })
});
const PlantPage = ({id, clear}) => {

    const classes = useStyles();
    const [plant, setPlant] = useState(null);
    console.log(id);
    useEffect(() => {
        getUserPlants([id]).then(result => {
            if (result.data[0] != null) {
                getPlantByAPI(result.data[0].api_id).then(result => {
                    setPlant(result.data.data.attributes);
                })
            }

        })
    }, [])

        return (
            <div>
                {plant &&
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia component='img'
                                   alt={plant.binomial_name}
                                   image={plant.main_image_path}
                                   height={150}>
                        </CardMedia>
                    </CardActionArea>
                    <CardHeader avatar={
                        <Avatar className={classes.plantAvatar}>
                            P
                        </Avatar>
                    } title={plant.name} subheader={plant.binomial_name}>
                    </CardHeader>
                    <CardContent>
                        <Typography className={classes.plantDescription}>
                            Sowing Method: {plant.sowing_method || 'No method found'}
                        </Typography>
                        <Typography>
                            Row Spacing: {plant.row_spacing ? plant.row_spacing + 'cm' : 'N/A'}
                        </Typography>
                        <Typography>
                            Spread: {plant.spread ? plant.spread + 'cm': 'N/A'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton onClick={() => clear(id)}>
                            <Clear/>
                        </IconButton>
                    </CardActions>
                </Card>}
            </div>
        )
}

export default PlantPage;