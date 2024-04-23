import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useNews = (initialCategory = "", initialCountry = "") => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [country, setCountry] = useState(initialCountry);

  const theme = useContext(ThemeContext);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
  const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=${category}&apiKey=${apiKey}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    getNews(filterUrl);
    setFilter("");
  };

  const getNews = async (API) => {
    setLoading(true);
    try {
      const { data } = await axios(API);
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews(url);
  }, [url, theme.state.darkMode]);

  useEffect(() => {
    setCategory(initialCategory);
    setCountry(initialCountry);
  }, [initialCategory, initialCountry]);

  return {
    news,
    loading,
    filter,
    country,
    category, 
    theme,
    setFilter,
    setCountry, 
    setCategory,
    handleSubmit,
  };
};

export default useNews;
