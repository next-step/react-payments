export abstract class ExternalStore<T> {
  store?: T | null;

  init() {
    return this.getExternalStore().then((res) => {
      this.#setLocalStore(res);
      return res;
    });
  }

  protected abstract getExternalStore(): Promise<T | null>;

  protected abstract setNewStoreInExternalStore(newStore: T | null): Promise<T | null>;

  getLocalStore() {
    return this.store;
  }

  #setLocalStore(newStoreResult: T | null) {
    this.store = newStoreResult;
  }

  setStore(newStore: T | null) {
    return this.setNewStoreInExternalStore(newStore).then((res) => {
      this.#setLocalStore(res);
      return res;
    });
  }
}
