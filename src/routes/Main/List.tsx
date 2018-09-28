import * as React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import withMovie, { MovieContext } from '../../Context/Movie';

const styles = {
  card: {
    minWidth: 275,
    margin: 10
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  }
};

interface IProps {
  classes: {
    card: string;
    title: string;
    pos: string;
  };
}

const List: React.SFC<IProps> = props => {
  const { classes } = props;
  return (
    <MovieContext.Consumer>
      {({ list }) => {
        return list.map(data => (
          <Card key={data.title} className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                Word of the Day
              </Typography>
              <Typography variant="headline" component="h2">
                <Link to={'/movie/' + data.id}>{data.title}</Link>
              </Typography>
            </CardContent>
          </Card>
        ));
      }}
    </MovieContext.Consumer>
  );
};

export default withMovie(withStyles(styles)(List));
