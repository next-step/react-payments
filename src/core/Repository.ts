export class Repository {
  private readonly _key: string;
  private readonly _storage: Storage;

  constructor(key: string, storage: Storage = localStorage) {
    this._key = key;
    this._storage = storage;
  }

  get storage() {
    return this._storage;
  }

  get key() {
    return this._key;
  }

  public getItem() {
  }

  public setItem(item: object) {
  }

  public removeItem() {
  }
}