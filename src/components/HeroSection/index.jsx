import { useVideos } from '../../context/VideosProvider';
import styled from 'styled-components';

const HeroSection = ({ children }) => {
  const { videos } = useVideos();
  const videoRandom = videos[Math.floor(Math.random() * videos.length)];
  // console.log(videoRandom.thumbnail.url);
  return (
    <HeroContainer>
      
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.section`
  height: calc((100vw) / 3.9 - 1px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url('https://yt3.googleusercontent.com/PSoypjrgFjIDIWCPoBYW3f4dLmR5Gs1Uj-cogo0lFLnnpRk7L-Fwh3NgmhJZ_vI8DWyN7gmvOFE=w1440-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeroTitle = styled.h1`
  padding: 1rem;
  font-size: 1.2rem;
  background: rgb(0, 112, 243);
  background: linear-gradient(
    0deg,
    rgba(0, 112, 243, 1) 0%,
    rgba(0, 112, 243, 0.7) 100%
  );
`;
