import request from '../utils/request';

export type IStory = {
  ga_prefix: string;
  id: number;
  images: string[];
  title: string;
  type: number;
};

export type latestNews = {
  date: string;
  stories: IStory[];
  top_stories: IStory[];
};

export const fetchLatestNews = (): Promise<latestNews> => {
  return request('/api/4/news/latest');
};

export const fetchNewsById = (id: string) => {
  return request(`/api/4/news/${id}`);
};
