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
    return JSON.parse(this.storage.getItem(this.key)) || [];
  }

  public setItem(item: object) {
    this.storage.setItem(this.key, JSON.stringify(item));
  }

  public removeItem() {
    this.storage.removeItem(this.key);
  }
}