import { MyComp } from './Composition';
import React from 'react';
import { Composition } from 'remotion';

 
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="some"
        component={MyComp}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};