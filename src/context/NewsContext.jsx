import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { useTranslation } from "../i18n";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useTranslation();

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const removeDuplicateNews = (newsArray) => {
    const seenTitles = new Set();
    return newsArray.filter((item) => {
      const normalizedTitle = item.title?.trim().toLowerCase();

      if (!normalizedTitle || seenTitles.has(normalizedTitle)) {
        return false;
      }

      seenTitles.add(normalizedTitle);
      return true;
    });
  };

  const filterAndLimitNews = (arr) => {
    const uniqueNews = removeDuplicateNews(arr);
    const data = shuffleArray(uniqueNews);
    const withImages = data.filter(
      (item) =>
        item.image &&
        item.image.trim() !== "" &&
        (item.image?.endsWith("png") || item.image?.endsWith("jpg")) &&
        !item.image?.endsWith("==")
    );
    const mobileLimited = withImages.slice(0, 30);
    const desktopLimited = mobileLimited.slice(0, 4);

    return {
      allFilteredNews: mobileLimited,
      desktopNews: desktopLimited,
    };
  };

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL + "/api/news", {
        params: { limit: 40, language },
      });
      const processedNews = filterAndLimitNews(response.data);
      console.log(processedNews);

      setNews(processedNews);
      setError(null);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();

    // Refresh news every hour
    const interval = setInterval(fetchNews, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <NewsContext.Provider value={{ news, loading, error }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
};
