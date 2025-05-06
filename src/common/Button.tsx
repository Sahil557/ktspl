import React from 'react';
import { ReactNode } from 'react';
import Iconic from './Iconic';

interface ButtonProps {
  text: string;
  color?: string;
  textColor?: string;
  size?: string;
  textSize?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = 'bg-secondary',
  textColor = 'text-black',
  size = 'py-2 px-4',
  textSize = 'text-xs',
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${color} ${textColor} ${size} ${textSize} font-semibold rounded-full flex items-center justify-center space-x-2`}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
