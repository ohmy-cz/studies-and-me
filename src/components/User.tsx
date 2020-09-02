import React from "react";
import { IUser } from "../interfaces/IUser";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
});

type UserProps = {
    user: IUser
}

export default function User(props: UserProps): JSX.Element {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={3}>
              <Grid item xs={3}>
                <Avatar alt={props.user.name} src={props.user.avatar_url} />
              </Grid>
              <Grid item xs={7}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {props.user.company}
                </Typography>
                <Typography variant="h5" component="h2">
                  {props.user.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {props.user.location}
                </Typography>
              </Grid>
          </Grid>
          {props.user.bio && (
            <Typography variant="body2" component="p">
                {props.user.bio}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button target="_blank" size="small" href={props.user.html_url}>Visit {props.user.name}</Button>
        </CardActions>
      </Card>
    );
}