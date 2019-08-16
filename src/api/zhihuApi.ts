import request from "../utils/request";
import { story } from "../types/zhihuTypes";

export const fetchLatestNews = (): Promise<{
  date: string;
  stories: story[];
  top_stories: story[];
}> => {
  return request("/api/4/news/latest");
};

export const fetchNewsById = (id: string) => {
  return request(`/api/4/news/${id}`);
};
