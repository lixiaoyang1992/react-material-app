import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 20,
      display: 'flex',
    },
    title: {
      padding: 20,
    },
    img: {
      height: 150,
      width: 150,
    },
  }),
);

export default function PaperSheet() {
  const classes = useStyles();
  const news = useSelector((state: RootState) => state.zhihu.list);
  return (
    <>
      {news.map(data => (
        <Paper key={data.id} className={classes.root}>
          <img className={classes.img} src={data.images[0]} alt={data.title} />
          <Typography className={classes.title} component="h3">
            {data.title}
          </Typography>
        </Paper>
      ))}
    </>
  );
}
