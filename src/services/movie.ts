import request from '../utils/request';

export const inTheaters = () => request('/v2/movie/in_theaters');
