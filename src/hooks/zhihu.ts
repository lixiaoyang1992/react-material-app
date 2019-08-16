import { useEffect, useState } from "react";
import { fetchLatestNews } from "../api/zhihuApi";
import { story } from "../types/zhihuTypes";

export const useLatestNews = () => {
  const [news, setNews] = useState<story[]>([]);
  useEffect(() => {
    fetchLatestNews().then(data => {
      setNews(data.stories);
    });
  }, []);
  return news;
};
