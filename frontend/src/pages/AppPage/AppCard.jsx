import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    width: 200,
    height: 200,
    padding: 5
  },
  media: {
    maxheight: 200
  }
});

// customizable cards for each component being rendered.
export default function ComponentCard({name, id, backgroundColor, color}) {
  const classes = useStyles();
  
  return (
    <Card className={classes.card} style={{ backgroundColor , color}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {/* id: {id} */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}