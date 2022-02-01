const PATH = {
  HOME: "/",
  CARD_REGISTER: "/card-register",
  CARD_REGISTER_COMPLETE: "/card-register/complete",
  CARD_NAME_UPDATE_BASE: "/card-name-update",
  CARD_NAME_UPDATE(id: string) {
    return `${this.CARD_NAME_UPDATE_BASE}?id=${id}`;
  },
};

export { PATH };
