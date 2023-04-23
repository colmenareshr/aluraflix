import styled from 'styled-components';
import { Colors } from '../UI/variables';
import Botao from '../../components/Botao';

const VideoPreview = ({ title, thumb, video }) => {
  return (
    <VideoPreviewSection>
      <VideoPreviewContainer>
        <VideoPreviewRandom src={thumb} alt={title} />
      </VideoPreviewContainer>
      <VideoPreviewTitle>{title}</VideoPreviewTitle>
      <Botao video={video} />
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
