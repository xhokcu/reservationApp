import React, { FC } from 'react';
import Svg, { G, Path, Mask, SvgProps } from 'react-native-svg';

interface SVGComponentProps extends SvgProps {
  filled?: string;
}

const CreateIcon: FC<SVGComponentProps> = ({ filled = '#000', ...props }) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={32} height={32}>
      <Path fill="#D9D9D9" d="M0 0H32V32H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M14.667 17.333h-8v-2.666h8v-8h2.666v8h8v2.666h-8v8h-2.666v-8z"
        fill={filled}
      />
    </G>
  </Svg>
);

export default CreateIcon;
