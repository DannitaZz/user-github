import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import StarBorderSharpIcon from '@mui/icons-material/StarBorderSharp';
import { Grid } from '@mui/material';

function ReposList({ state, dispatch }) {
  /* console.log('En List', state.repos[0].id); */
  return (

    <List sx={{ width: '100%', maxWidth: 1500, bgcolor: 'background.paper' }} align='center'>
      {state && state.repos.map((repo, i) => {
        
        return <div key={i}>
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
            <StarBorderSharpIcon onClick={(e) => dispatch({type: 'favs', value: repo.id})}/>
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      })}

      {/* <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem> */}
    </List>

  );
}

function Repos({ state, dispatch }) {
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
        <ReposList state={state} dispatch={dispatch} />
      </Grid>

    </Grid>

  )
}



export default Repos;