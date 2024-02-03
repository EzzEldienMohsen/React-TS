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
    <div>
      <img src={image.src} alt={image.alt} />
      {children}
    </div>
  );
};

export default Header;
