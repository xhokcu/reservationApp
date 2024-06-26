import React, { FC } from 'react';
import Svg, { G, Path, Mask, SvgProps } from 'react-native-svg';

interface SVGComponentProps extends SvgProps {
  filled?: string;
}

const ListIcon: FC<SVGComponentProps> = ({ filled = '#000', ...props }) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={32}
      height={32}
    >
      <Path fill="#D9D9D9" d="M0 0H32V32H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M4 25.333v-2.666h24v2.666H4zM4 20v-2.667h24V20H4zm0-5.333V12h24v2.667H4zm0-5.334V6.667h24v2.666H4z"
        fill={filled}
      />
    </G>
  </Svg>
);

export default ListIcon;
