import { createContext, useContext, useState, useEffect } from 'react';
import { requestCategoriesVideos, requestVideos } from '../api/videos.api';

const videosContext = createContext();

export const useVideos = () => {
  const context = useContext(videosContext);
  return context;
};

export const VideosProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState(['']);

  const getCategoryVideos = async () => {
    const res = await requestCategoriesVideos();
    setCategories(res.data);
  };

  const getVideos = async () => {
    try {
      const res = await requestVideos();
      setVideos(res.data);
    } catch (error) {
      console.log('ERROR ===>', error);
    }
  };

  useEffect(() => {
    // getCategoryVideos();
    getVideos();
  }, []);

  return (
    <videosContext.Provider
      value={{
        videos,
        categories,
        setVideos,
        setCategories,
        getVideos,
        getCategoryVideos,
      }}
    >
      {children}
    </videosContext.Provider>
  );
};
