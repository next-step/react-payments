import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';

function CardList() {
  return (
    <div className="app flex-column-center">
      <Link to={routes.cardCreator} className="card-box">
        <div className="empty-card">+</div>
      </Link>
    </div>
  );
}

export { CardList };
