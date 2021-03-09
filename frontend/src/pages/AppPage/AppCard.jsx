import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


// customizable cards for each component being rendered.
export default function ComponentCard({name, id, backgroundColor, color}) {
  
  return (
    <Card className='card' style={{ backgroundColor , color}}>
      <CardActionArea>
        <CardMedia className=' media'/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}