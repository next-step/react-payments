import type { TCardListService } from '../type';

export function checkCardListServiceObject(cardListService: TCardListService) {
  if (!cardListService.get) {
    throw new Error('Service 객체에 get 메소드가 없습니다. 적절한 async 함수를 할당해주세요.');
  }

  if (!cardListService.post) {
    throw new Error('Service 객체에 post 메소드가 없습니다. 적절한 async 함수를 할당해주세요.');
  }
}
