import React, {useState} from 'react';
import {Grid, makeStyles, Paper, TextField} from "@material-ui/core";
import {showPlants} from "../backendRequests";
import PlantCard from "../GardenComponents/PlantCard";


const useStyles = makeStyles((theme) => {
    return ({
        root: {},
        searchBar: {
            margin: '20px',
        },
        plantResults: {
            display: 'flex',
            justifyContent: 'space-evenly',
        }


    })
});
const searchProps ={
    fontSize: 30,
}
const PlantStore = ({notifyUpdate}) => {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [plants, setPlants] = useState([]);
    return (
        <div className={classes.root}>
            <Paper className={classes.searchBar}>
                <TextField InputProps={searchProps} id='search-bar' placeholder='Search Plants here!' fullWidth value={search} onChange={(e) => {
                    setSearch(e.target.value);
                    showPlants(e.target.value).then(res => {
                        if(res.data.data.length > 0){
                        setPlants(res.data.data);
                        }
                    })

                }
                }/>


            </Paper>
            <Grid container spacing={3} className={classes.plantResults}>
                {(plants.length > 0 && plants.map(plant => {
                    return (
                        <Grid item key={plant.id}>
                            <PlantCard notifyUpdate={notifyUpdate} plant={plant}/>
                        </Grid>
                    )
                }))}
            </Grid>

        </div>
    );
}


export default PlantStore;