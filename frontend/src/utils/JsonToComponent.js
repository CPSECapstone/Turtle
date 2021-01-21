import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import ComponentCard from './ComponentCard.jsx';

// Creates a grid of components, fetched from a mock API pull
export function CreateComponents() {

  const [components, setComponents] = useState([])
    useEffect(()=>{
      async function fetchData() {
          setComponents(
        await fetch('https://run.mocky.io/v3/e3d96faa-fe23-4e8a-b83a-bb363f3d4798')
            .then(res => res.json())
            .then(res => res.components)
            .catch(err => console.log(err, 'warning'))
          )
      }
      fetchData();
    } ,[])

      return (
        <div className="Components">
        <h3>COMPONENT GRID</h3>
        <Grid container spacing={10}
        style={{padding: '24px'}}
        >
        {components.map( components =>
        <Grid key={components.id}
        item
        xs={12} sm={6} md={4} lg={4} xl={3}
        >
        <ComponentCard
        type={components.type}
        id={components.id}
        backgroundColor={components.color}
        color={components.textColor}
        />
        </Grid> )}
        </Grid>
        </div>);
}

