import { Repository } from '../core/Repository';

class CardRepository extends Repository {
  getItem() {
    return JSON.parse(this.storage.getItem(this.key));
  }

  setItem(item: object) {
    this.storage.setItem(this.key, JSON.stringify(item));
  }

  removeItem() {
    this.storage.removeItem(this.key);
  }
}

export default new CardRepository('card', localStorage);

