import React from 'react';

type TFrameProps = {
  children: React.ReactNode;
};

function Frame({ children }: TFrameProps) {
  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">&lt; 카드 추가</h2>
        {children}
        <div className="button-box">
          <div className="button-text">다음</div>
        </div>
      </div>
    </div>
  );
}

export default Frame;
