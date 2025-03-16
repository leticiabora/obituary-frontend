import React from 'react';

import { Icon } from './types';
import { theme } from '@/theme/theme';

const SvgComponent: React.FC<Icon> = (props) => (
<svg fill={props?.color || theme.colors.green.dark} {...props} viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M259.1,29.94a4.89,4.89,0,0,0-.73-.26,5.37,5.37,0,0,0-1.27-.46,5.59,5.59,0,0,0-1,0,5.16,5.16,0,0,0-1.24.06,6.29,6.29,0,0,0-1.17.42,6.42,6.42,0,0,0-.8.29C244.11,35.3,38,162.89,73,307.91c20.51,84.81,91.36,96.61,129.18,96.61a147.31,147.31,0,0,0,24.23-1.76,5.94,5.94,0,0,0,4.75-6.94,6.06,6.06,0,0,0-6.94-4.78c-4.67.89-114,19.87-139.63-85.92C53.83,177.72,230.42,58.58,256,42.1c25.57,16.48,202.18,135.62,171.38,263C401.8,410.93,292.43,392,287.74,391a6,6,0,0,0-6.93,4.78,5.94,5.94,0,0,0,4.75,6.94,147.17,147.17,0,0,0,24.23,1.76c37.81,0,108.67-11.8,129.17-96.61C474,162.89,267.89,35.3,259.1,29.94Z"/><path d="M366.34,256.47A6,6,0,1,0,357.9,248L262,344V291.64l76.84-76.82a6,6,0,1,0-8.44-8.45L262,274.76V222.44l42.22-42.23a6,6,0,1,0-8.44-8.44L262,205.55V151.73a6,6,0,1,0-11.92,0v53.83l-33.77-33.78a6,6,0,0,0-8.44,8.42L250,222.42v52.33l-68.39-68.38a6,6,0,0,0-8.44,8.45L250,291.64V344L154.1,248a6,6,0,1,0-8.45,8.45L250,360.87v116a6,6,0,1,0,11.92,0v-116Z"/></svg>
);

export default SvgComponent;