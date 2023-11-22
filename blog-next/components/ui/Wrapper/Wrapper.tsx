import { DetailedHTMLProps, FC, HTMLAttributes, JSX } from 'react';
import styles from './Wrapper.module.scss';

const makeClassName = (classes?: string) => {
  if (classes) {
    return `${styles.wrapper} ${classes}`
  }
  return styles.wrapper
}

const Wrapper: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({children, ...props}): JSX.Element => {

  const divClassName = makeClassName(props.className);

  return (
    <div className={divClassName}>
      {children}
    </div>
  );
};
export default Wrapper;
