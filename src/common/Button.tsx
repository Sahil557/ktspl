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
  color = 'bg-blue-500',
  textColor = 'text-white',
  size = 'py-2 px-4',
  textSize = 'text-base',
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${color} ${textColor} ${size} ${textSize} rounded-lg flex items-center justify-center space-x-2`}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
