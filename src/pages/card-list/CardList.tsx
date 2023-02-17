import React from 'react';
import { Frame } from '../../components/Frame';

function CardList() {
  return (
    <Frame title="카드 목록">
      <ul>
        <li>
          <div className="empty-card">+</div>
        </li>
      </ul>
    </Frame>
  );
}

export default CardList;
