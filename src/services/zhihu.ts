import request from '../utils/request';

export const latest = () => request('/api/4/news/latest');
