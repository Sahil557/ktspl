// /components/ui/Icon.tsx

'use client'; // Mark as client component to use it in Next.js 13+

import React from 'react';
import { Icon } from '@iconify/react';

interface IconProps {
  icon: string; // The name of the icon
  size?: string | number; // Size of the icon
  color?: string; // Color of the icon
}

const Iconic: React.FC<IconProps> = ({ icon, size = 24, color = 'black' }) => {
  console.log('12121212', icon)
  return (
    <Icon icon={icon} width={size} height={size} color={color} />
  );
};

export default Iconic;
