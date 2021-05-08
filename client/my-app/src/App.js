import './App.css';
import {createContext, useState} from 'react';
import {Container, createMuiTheme, ThemeProvider} from "@material-ui/core";
import {green, grey, orange} from "@material-ui/core/colors";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from './TLComponents/Home';
import AboutPage from "./TLComponents/AboutPage";
import NavBar from "./TLComponents/NavBar";
import Login from "./TLComponents/Login";
import SignUp from "./TLComponents/SignUp";
import UserPage from "./TLComponents/UserPage";
import PlantStore from "./TLComponents/PlantStore";
import UserInfo from "./TLComponents/UserInfo";

const themeLight = createMuiTheme({
    palette: {
        primary: green,
        secondary: orange,
        tertiary: grey,
        type:'light',
    },
    custom: {
        background: green,
    }

});

const themeDark = createMuiTheme({
    palette: {
        primary: green,
        secondary: orange,
        tertiary: grey,
        type:'dark',
    },
    custom: {
        background: 'dark',
    }
})

export const UserContext = createContext('scotch'
)

function App() {
    const [test, setTest] = useState(null);
   // console.log('current local storage', localStorage.getItem('currentUser'));
    //const [mode, setMode] = useState('light');
    //const [mode, setMode] = useState('light')
    const [userPreferences, setUserPreferences] = useState({
        loggedIn: localStorage.getItem('loggedIn'),
        username: localStorage.getItem('currentUser'),
        mode: localStorage.getItem('mode'),
        zip: localStorage.getItem('zip'),
    })
    const ContextProvider = UserContext.Provider;
    const prefChange = (pref) => {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('currentUser', pref.username);
        localStorage.setItem('zip', pref['zip']);
        localStorage.setItem('mode', pref.mode || userPreferences.mode)
       // setTheme(pref.mode);
        setUserPreferences(pref);

    }
    const mode = userPreferences.mode;
    let theme = themeLight;
    switch(mode){
        case 'light':
            theme = themeLight;
            break;
        case 'dark':
            theme = themeDark;
            break;

    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
        <div className={'back-ground'}>
            <ContextProvider value={userPreferences}>
                <Router>
                        <Container maxWidth='xl'>
                            <NavBar/>
                            <div className='App'>
                                <Switch>
                                    <Route exact path="/">
                                        <Home/>
                                    </Route>
                                    <Route path="/about">
                                        <AboutPage/>
                                    </Route>
                                    <Route path="/login">
                                        <Login onSuccess={(pref) => prefChange(pref)}/>
                                    </Route>
                                    <Route path="/signup">
                                        <SignUp onSuccess={(pref) => {
                                            prefChange(pref);
                                        }}/>
                                    </Route>
                                    <Route exact path="/users/:username">
                                        <UserPage/>
                                    </Route>
                                    <Route path="/search">
                                        <PlantStore/>
                                    </Route>
                                    <Route exact path='/users/:username/info'>
                                        <UserInfo onSuccess={(pref) => prefChange(pref)}/>
                                    </Route>
                                </Switch>
                            </div>
                        </Container>
                </Router>
            </ContextProvider>
        </div>
        </ThemeProvider>
    )

}


export default App;
