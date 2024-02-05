import React from 'react';

interface Info {
  mode: 'hint' | 'warning';
  children: React.ReactNode;
  severity: 'low' | 'medium' | 'high';
}

const InfoBox: React.FC<Info> = ({ mode, children, severity }) => {
  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
