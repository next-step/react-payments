export default class BaseStorage<T> {
  readonly #key: string;
  readonly #storage: Storage;

  constructor(key: string, storage = localStorage) {
    this.#key = key;
    this.#storage = storage;
  }

  getData() {
    return JSON.parse(this.#storage.getItem(this.#key) || "null") as T;
  }

  setData(data: T) {
    this.#storage.setItem(this.#key, JSON.stringify(data));
  }

  clear() {
    this.#storage.removeItem(this.#key);
  }
}
