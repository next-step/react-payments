import React from 'react';
import { Frame } from '../../components/Frame';
import { Link } from '../../components/Link';
import './CardList.css';

function CardList() {
  return (
    <Frame title="카드 목록">
      <ul>
        <li>
          <Link to="/card-add">
            <div className="empty-card">+</div>
          </Link>
        </li>
      </ul>
    </Frame>
  );
}

export default CardList;
