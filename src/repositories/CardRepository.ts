import { Repository } from '../core/Repository';

class CardRepository extends Repository {
  constructor(storeKey: string) {
    super(storeKey);
  }
}

export default new CardRepository('card-list');

