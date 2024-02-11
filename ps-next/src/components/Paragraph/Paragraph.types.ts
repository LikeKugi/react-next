import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IParagraphProps extends  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  variant?: 'sm' | 'md' | 'lg'
}
