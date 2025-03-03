import React from 'react';

import { Icon } from './types';

const SvgComponent: React.FC<Icon> = (props) => (
<svg {...props} viewBox="-1 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <g id="user" transform="translate(-3 -2)">
    <path id="secondary" fill="#2ca9bc" d="M9,15h6a5,5,0,0,1,5,5h0a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1H4a5,5,0,0,1,5-5Z"/>
    <path id="primary" d="M20,20h0a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1H4a5,5,0,0,1,5-5h6A5,5,0,0,1,20,20ZM12,3a4,4,0,1,0,4,4A4,4,0,0,0,12,3Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
  </g>
</svg>
);

export default SvgComponent;
