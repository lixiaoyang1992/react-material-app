import * as React from 'react';
import { latest } from '../services/zhihu';

interface IProps {}

interface IState {
  list: IStory[];
}

interface IRes {
  date: string;
  stories: IStory[];
}

interface IStory {
  images: string[];
  type: number;
  id: number;
  ga_prefix: string;
  title: string;
}

const defaultState: IState = {
  list: []
};
export const NewsContext = React.createContext(defaultState);

const withNews = <P extends IProps>(
  UnwrappedComponent: React.ComponentType<P>
) =>
  class WithBlueBackground extends React.Component<P, IState> {
    constructor(props: P) {
      super(props);
      this.state = defaultState;
      this.list();
    }

    public list = async () => {
      const res: IRes = await latest();
      console.log(123, res);
      this.setState({
        list: res.stories
      });
    };

    public render() {
      return (
        <NewsContext.Provider value={this.state}>
          <UnwrappedComponent {...this.props} />
        </NewsContext.Provider>
      );
    }
  };

export default withNews;
