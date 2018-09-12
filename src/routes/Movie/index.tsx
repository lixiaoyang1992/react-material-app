import * as React from 'react';
import { match } from 'react-router';
import { subject } from '../../services/movie';

interface IProps {
  match: match<{
    id: string;
  }>;
}

interface IState {
  title: string;
}

interface IRes {}

class Movie extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: ''
    };
    this.list();
  }

  public list = async () => {
    const res: IRes = await subject(this.props.match.params.id);
    this.setState({
      ...res
    });
  };

  public render() {
    console.log(this.state);
    return <React.Fragment>{this.state.title}</React.Fragment>;
  }
}

export default Movie;
