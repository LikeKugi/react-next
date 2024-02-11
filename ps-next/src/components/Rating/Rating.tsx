import { FC, JSX } from 'react';
import { IRatingProps } from '@/components/Rating/Rating.types';
import styles from './Rating.module.scss';
import { clsx } from 'clsx';

const Rating: FC<IRatingProps> = ({ className, isEditable = false, setRating=() => null, rating, ...other }): JSX.Element => {
  const onChangeRating = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    if (!isEditable || !(e.target instanceof Element)) return;

    const targetElement = e.target.closest('[data-rating]')

    if (targetElement instanceof SVGElement) {
      if ('dataset' in targetElement) {
        const newRating = Number(targetElement!.dataset.rating) || 0
        setRating(newRating);
      }
    }
  }

  return (
    <div className={clsx(className, styles.Rating)} {...other} onClick={onChangeRating}>
      {Array.from({ length: 5 }, (_, idx) => (
        <svg key={idx}
             data-rating={idx + 1}
             className={clsx(styles.star, rating > idx && styles['star--filled'])}
             width="20.000000"
             height="20.000000"
             viewBox="0 0 20 20"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path id="Vector"
                d="M19.9477 7.55688C19.816 7.13428 19.4568 6.83508 19.0335 6.7951L13.2601 6.24817L10.9784 0.673828C10.81 0.264343 10.4267 0 10 0C9.57336 0 9.18991 0.264343 9.02252 0.673828L6.74084 6.24817L0.966522 6.7951C0.543243 6.83588 0.184784 7.13507 0.0523376 7.55688C-0.0793457 7.97943 0.0422668 8.44299 0.362427 8.73596L4.72665 12.7292L3.43985 18.6434C3.3457 19.0782 3.50745 19.5279 3.85321 19.7887C4.03906 19.9296 4.25745 20 4.47656 20C4.66486 20 4.8533 19.9478 5.02161 19.8427L10 16.7365L14.9775 19.8427C15.3427 20.0704 15.8018 20.0495 16.1468 19.7887C16.4926 19.5279 16.6543 19.0782 16.5602 18.6434L15.2734 12.7292L19.6376 8.73596C19.9576 8.44299 20.0793 7.98041 19.9477 7.55688Z"
                fill="currentColor"/>
        </svg>
      ))}
    </div>
  );
};
export default Rating;
