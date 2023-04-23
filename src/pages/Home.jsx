import styled from 'styled-components';
import { useVideos } from '../context/VideosProvider';
import Youtube from 'react-youtube';
import HeroSection from '../components/HeroSection';
import VideoPreview from '../components/VideoPreview';

const Home = () => {
  const { videos } = useVideos();
  const videoRandom = videos[Math.floor(Math.random() * videos.length)];

  const opts = {
    heigth: '100%',
    width: '100%',
  };
  return (
    <>
      <HeroSection />
      <VideoPreview title={videoRandom.title} thumb={videoRandom.thumbnail} />
    </>
  );
};

export default Home;


