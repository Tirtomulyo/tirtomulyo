import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { image_url } from '../../variable/BaseUrl';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 375,
        margin: 'auto'
    },
})

function EduwisataCard(props) {
    const classes = useStyles();
    const navigate = useNavigate()

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="215"
                    image={props.data.header_image}
                    title={ props.data.title }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.data.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button 
                    size="small" 
                    color="primary" 
                    onClick={() => navigate(`/content/${props.data.slug}`)}
                >
                    Baca Selengkapnya
                </Button>
            </CardActions>
            </Card>
    )
}

export default EduwisataCard
