import { FC, JSX, PropsWithChildren } from 'react';

const AboutLayout: FC<PropsWithChildren> = ({children}): JSX.Element => {
  return (
    <>
      <nav>About Navigation</nav>
      <main>
        {children}
      </main>
    </>
  );
};
export default AboutLayout;
