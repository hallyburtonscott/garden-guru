import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => {
    return ({
        root: {
           width: '100%',
        },
        plantAvatar: {
            color: theme.palette.secondary[400],
            backgroundColor: theme.palette.primary[300],
        }

    })
});
const NewsArticle = ({article}) => {
        const classes = useStyles();
        const {author, title, content, url, urlToImage, description} = article;
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia component='img'
                               alt={'article-title'}
                               image={urlToImage}
                               height={150}
                               width={50}>
                    </CardMedia>
                </CardActionArea>
                <CardHeader title={title} subheader={author}/>
                <CardContent>
                    {description}
                </CardContent>
                <CardActions>
                    <Typography>Full Article: <a target ='_blank' href={`${url}`}>{url}</a>
                    </Typography>
                </CardActions>
            </Card>

        )
    }

;

export default NewsArticle;