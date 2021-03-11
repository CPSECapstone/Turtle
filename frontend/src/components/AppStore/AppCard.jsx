import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { StyledCard, AddButton, Content } from "./AppStore.styled";

export default function ComponentCard({name, id, backgroundColor, color}) {
  
  return (
    <StyledCard style={{ backgroundColor , color}}>
        <Content>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <AddButton>
            <Button size="small" variant="contained" color="default">Add</Button>
          </AddButton>
        </Content>
    </StyledCard>
  );
}
