import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import StarBorderSharpIcon from '@mui/icons-material/StarBorderSharp';
import StarIcon from '@mui/icons-material/Star';
import { Grid } from '@mui/material';

function ReposList({ repos, favs, dispatch }) {
  return (

    <List sx={{ width: '100%', maxWidth: 1500, bgcolor: 'background.paper' }} align='center'>
      {repos && repos.map((repo, i) => {
        
        return <div key={repo.id}>
          <ListItem alignItems="center">
            <ListItemText
              align="center"
              primary={repo.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Description:
                  </Typography>
                  {"  " + repo.description}
                </React.Fragment>
              }
            />
            {(()=> {
                if(favs.includes(repo.id)) {
                  return <StarIcon onClick={(e) => dispatch({type: 'favs', value: repo.id})}/>
                } else {
                  return <StarBorderSharpIcon onClick={(e) => dispatch({type: 'favs', value: repo.id})}/>
                }
            })()}
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      })}
    </List>

  );
}

function Repos({ repos, favs, dispatch }) {
  return (
    <Grid
      container
      justify="center"
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: "100 vh" }}
      spacing={5}
    >
      <Grid item>
        <Typography variant="h4" color="text" style={{ marginTop: "15%" }}>Repositories</Typography>
      </Grid>
      <Grid item xs={12} style={{ minWidth: "80vw" }}>
        <ReposList repos={repos} favs={favs} dispatch={dispatch} />
      </Grid>

    </Grid>

  )
}

export default Repos;