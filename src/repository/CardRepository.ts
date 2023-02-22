import { Repository } from '../core/Repository';

class CardRepository extends Repository {
  constructor() {
    super('card-list');
  }
}

export default new CardRepository();

