import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IButtonProps extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  variant?: 'primary' | 'ghost'
  arrow?: 'right' | 'down' | 'none'
}
