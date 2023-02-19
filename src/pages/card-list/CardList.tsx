import React from 'react';
import { Frame } from '../../components/Frame';
import { Link } from '../../components/Link';
import './CardList.css';

function CardList() {
  return (
    <Frame title="카드 목록">
      <ul>
        <li>
          <div className="empty-card">
            <Link to="/card-add">+</Link>
          </div>
        </li>
      </ul>
    </Frame>
  );
}

export default CardList;
