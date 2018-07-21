import * as React from 'react';

export interface IUser {
  name: string;
  login: () => void;
}

const defaultValue: IUser = {
  name: 'user',
  login: () => {}
};

export const UserContext = React.createContext(defaultValue);
