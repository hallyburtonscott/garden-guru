import React, {useState} from 'react';
import {Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import NewsArticle from "./NewsArticle";
import {getNews} from "../backendRequests";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 50,
        maxWidth: 500,
        padding: 50
    },
    newHeader:{
        backgroundColor: theme.palette.secondary[200],
        marginBottom: 15,
    }
}))
const NewsFeed = (props) => {
    const [search, setSearch] = useState('');

    const [news, setNews] = useState(prev => {
        if (sessionStorage.getItem('news')) {
            return JSON.parse(sessionStorage.getItem('news')).articles
        } else
            return [];

    })
    const classes = useStyles();
    const searchProps = {
        fontSize: 30,
    }



    return (
        <Paper className={classes.root} elevation={3}>
            <Typography variant='h4' className={classes.newHeader}>
                Gardening News
            </Typography>
            <Grid container spacing={2}>
                {news.length > 0 && news.map(article => {
                    return (
                        <Grid item key={article.publishedAt}>
                            <NewsArticle key={article.publishedAt} article={article}/>
                        </Grid>
                    );
                })}
            </Grid>

            <Button variant='contained' onClick={() => {
                getNews('gardening').then(res => {
                    if (res) {
                        setNews(res.data.articles);
                        sessionStorage.setItem('news', JSON.stringify(res.data))
                    }
                })
            }}>Search! </Button>
        </Paper>
    );
}

export default NewsFeed;