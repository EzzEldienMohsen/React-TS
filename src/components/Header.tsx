import React from 'react';

interface IMG {
  image: {
    src: string;
    alt: string;
  };
}
type GeneralProps = React.PropsWithChildren<IMG>;
const Header: React.FC<GeneralProps> = ({ image, children }) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
