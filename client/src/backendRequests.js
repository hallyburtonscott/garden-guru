const axios = require('axios');
require('dotenv').config();
const parse = require('postgres-date');
//const SERVERURL = `http://localhost:${process.env.PORT || 8000}`

const SERVERURL = process.env.NODE_ENV === 'production' ? 'https://garden-guru-comp426.herokuapp.com/api' : 'http://localhost:8000';

//console.log(window.location.origin);

export async function createUser(first, last, email, phone, username, password) {
        const result = await axios({
            method: 'post',
            url: '/api/signup',
            data: {
                first: first,
                last: last,
                email: email,
                phone: phone,
                username: username,
                password: password,
            }
        });
        return result;
}

export const getUsers = async () => {
    const result = await axios({
        method: 'get',
        url: '/api/users',
    })
    return result;
}


export const getUser = async (username, password) => {
    //console.log('username', username);
    //console.log(password);
    const result = await axios({
        method: 'post',
        url: `/api/login`,
        data: {
            username: username,
            password: password,
        }
    });
    return result;
}

export const updateUserPreferences = async (username, password, preferences) => {
    const {zip, mode} = preferences;
    const result = await axios({
        method: 'put',
        url: `/api/users/${username}`,
        data: {
            password: password,
            zip: zip,
            mode: mode,
        }
    })
    return result;
}
/**Plant Related Queries */
export const showPlants = async (filter) => {
    const result = await axios({
        method: 'get',
        url: `https://openfarm.cc/api/v1/crops/?filter=${filter}`
    })
    return result;
}
export const getPlantByAPI = async (id) =>{
    const result = await axios({
        method:'get',
        url: `https://openfarm.cc/api/v1/crops/${id}`
    });
    return result;
}

export const getUserPlantConnections = async (username) => {
    const result = await axios({
        method:'get',
        url: `/api/plants/${username}`
    })
    return result;
}

export const getUserPlants = async (plantIds) =>{
    const result = await axios({
        method:'post',
        url: `/api/getPlants`,
        data: {
            plant_ids: plantIds,
        }
    });
    return result;
}

export const createPlantConnection = async (username, attributes) => {
    const result = await axios({
        method: 'put',
        url: `/api/plants/${username}`,
        data: {
            attributes: attributes,
        }
    });
    return result;
}
export const deleteUserPlant = async (username, id) => {
    const result = await axios({
        method: 'delete',
        url: `/api/plants/${username}`,
        data: {
            id: id,
        }

    })
}

export const updatePlantConnection = async (username, plantId, timestamp) =>{
    const result = await axios({
        method: 'post',
        url: `/api/plants/${username}`,
        data: {
            plant_id: plantId,
            timestamp: timestamp,
        }
    })
    return result;
}
/** Weather Related Queries*/
export const getWeather = async (zip) => {
    // return {
    //     data: null,
    // }
    const result = await axios({
        method: 'get',
        url: `/api/weather/${zip}`,
    })
    return result;
}

/** Icon Related Queries*/
// export const getIcon = async(query) => {
//     const result = await axios({
//         method: 'get',
//         url: SERVERURL + `/icons/${query}`
//     })
//}

/** News realted Queries */
export const getNews = async(query) => {
    const result = await axios({
        method: 'get',
        url: `/api/news/${query}`
    });

    return result;
}
