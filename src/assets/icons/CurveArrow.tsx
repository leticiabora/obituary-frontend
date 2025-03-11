import React from 'react';

import { Icon } from './types';

const SvgComponent: React.FC<Icon> = ({ height, width, color = '#000' }) => (
<svg fill={color} height={height} width={width} viewBox="0 0 24 24" id="curve-arrow-up-8" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon flat-line"><path id="primary" d="M15,3V8.51A13.17,13.17,0,0,1,6,21" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><polyline id="primary-2" data-name="primary" points="18 6 15 3 12 6" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
);

export default SvgComponent;