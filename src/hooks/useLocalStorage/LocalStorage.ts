import { ExternalStore } from '../useExternalStore';

export class LocalStorage<T extends { [key: string]: any }> extends ExternalStore<T> {
  key: string;

  constructor(key: string) {
    super();
    this.key = key;
  }

  // override
  protected async getExternalStore() {
    const storageValue = window?.localStorage.getItem(this.key);
    return this.#parseJSONToObject(storageValue);
  }

  #parseJSONToObject(string?: string | null) {
    return string ? JSON.parse(string) : string;
  }

  #stringifyObject(string?: T | null) {
    return string ? JSON.stringify(string) : string;
  }

  // override
  protected async setNewStoreInExternalStore(newStore: T | null): Promise<T | null> {
    const stringifiedObject = this.#stringifyObject(newStore);
    if (stringifiedObject) {
      window.localStorage.setItem(this.key, stringifiedObject);
    } else {
      window.localStorage.removeItem(this.key);
    }

    return newStore;
  }
}
