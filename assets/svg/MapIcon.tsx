import React, { FC } from 'react';
import Svg, { G, Path, Mask, SvgProps } from 'react-native-svg';

interface SVGComponentProps extends SvgProps {
  filled?: string;
}

const MapIcon: FC<SVGComponentProps> = ({ filled = '#000', ...props }) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={32} height={32}>
      <Path fill="#D9D9D9" d="M0 0H32V32H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M14.667 18.667h2.666v-4h4V12h-4V8h-2.666v4h-4v2.667h4v4zM16 25.8c2.711-2.489 4.722-4.75 6.033-6.783C23.344 16.983 24 15.177 24 13.6c0-2.422-.772-4.405-2.317-5.95C20.14 6.106 18.244 5.333 16 5.333c-2.244 0-4.139.773-5.683 2.317C8.772 9.195 8 11.178 8 13.6c0 1.578.656 3.383 1.967 5.417C11.277 21.05 13.289 23.31 16 25.8zm0 3.533c-3.578-3.044-6.25-5.872-8.017-8.483-1.766-2.611-2.65-5.028-2.65-7.25 0-3.333 1.073-5.989 3.217-7.967 2.144-1.977 4.628-2.966 7.45-2.966s5.306.989 7.45 2.966c2.144 1.978 3.217 4.634 3.217 7.967 0 2.222-.884 4.639-2.65 7.25-1.767 2.611-4.44 5.439-8.017 8.483z"
        fill={filled}
      />
    </G>
  </Svg>
);

export default MapIcon;
