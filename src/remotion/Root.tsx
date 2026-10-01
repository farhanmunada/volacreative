import React from 'react';
import { Composition } from 'remotion';
import { MerchComposition, MerchCompositionProps } from './MerchComposition';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MerchShowcase"
      component={MerchComposition as any}
      durationInFrames={360}
      fps={30}
      width={1080}
      height={1080}
      defaultProps={{
        category: 'concert' as const,
        eventName: 'Vola Creative Live',
        autoCycle: true,
      }}
    />
  );
};
