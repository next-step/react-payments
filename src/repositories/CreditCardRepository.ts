import { CreditCard } from '@/entities/creditcard';

const LOCAL_STORAGE_KEY = 'cards';

class CreditCardRepository {
  findById(id: string): CreditCard {
    const local = localStorage.getItem(LOCAL_STORAGE_KEY);
    const cards = local ? JSON.parse(local) : [];
    return cards.find((card: CreditCard) => card.id === id);
  }

  findAll(): CreditCard[] {
    const local = localStorage.getItem(LOCAL_STORAGE_KEY);
    return local ? JSON.parse(local) : [];
  }
  deleteById(id: string): void {
    const local = localStorage.getItem(LOCAL_STORAGE_KEY);
    const cards = local ? JSON.parse(local) : [];
    const newCards = cards.filter((card: CreditCard) => card.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCards));
  }
  updateCardNickname(id: string, cardNickname: string): void {
    const local = localStorage.getItem(LOCAL_STORAGE_KEY);
    const cards = local ? JSON.parse(local) : [];
    const newCards = cards.map((card: CreditCard) => {
      if (card.id === id) {
        return { ...card, cardNickname };
      }
      return card;
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCards));
  }
  create(card: CreditCard): void {
    const local = localStorage.getItem(LOCAL_STORAGE_KEY);
    const cards = local ? JSON.parse(local) : [];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...cards, card]));
  }
}

export default CreditCardRepository;
