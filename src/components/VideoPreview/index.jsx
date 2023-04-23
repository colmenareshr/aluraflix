import styled from 'styled-components';
import { BsYoutube } from 'react-icons/bs';
import { Colors } from '../UI/variables';

const VideoPreview = ({ title, thumb }) => {
  return (
    <VideoPreviewSection>
      <VideoPreviewContainer>
        <VideoPreviewRandom src={thumb} alt={title} />
      </VideoPreviewContainer>
      <VideoPreviewTitle>{title}</VideoPreviewTitle>
    </VideoPreviewSection>
  );
};
export default VideoPreview;

const VideoPreviewSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${Colors.textColor};
  gap: 0.6rem;
`;

const VideoPreviewContainer = styled.a`
  width: 100%;
  height: 100%;
`;
const VideoPreviewRandom = styled.img`
  width: 100%;
  height: 100%;
`;

const VideoPreviewTitle = styled.h3``;
