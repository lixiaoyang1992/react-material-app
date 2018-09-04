import request from '../utils/request';

export const fetchUser = () => request('/user/info');
