import { BgVideo, FooterVideoWrapper, LoopingVideoBgOverlay } from './styles';

export function LoopingVideoBg() {
  return (
    <FooterVideoWrapper>
      <BgVideo autoPlay muted playsInline loop aria-hidden tabIndex={-1}>
        <source
          src="https://tglab.com/wp-content/uploads/2023/10/TGlab_-_updated_10.23.m4v"
          type="video/mp4"
        />
      </BgVideo>

      <LoopingVideoBgOverlay />
    </FooterVideoWrapper>
  );
}
