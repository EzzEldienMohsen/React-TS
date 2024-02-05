import React from 'react';
interface HintInfo {
  mode: 'hint';
  children: React.ReactNode;
}
interface WarningInfo {
  mode: 'warning';
  children: React.ReactNode;
  severity: 'low' | 'medium' | 'high';
}

type Info = WarningInfo | HintInfo;

const InfoBox: React.FC<Info> = (props) => {
  const { children, mode } = props;
  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
