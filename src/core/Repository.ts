export default class Repository {
  static storage: Storage = localStorage;

  static get(key) {
    return JSON.parse(this.storage.getItem(key));
  }

  static set(key, data) {
    this.storage.setItem(key, JSON.stringify(data));
  }

  static remove(key) {
    this.storage.removeItem(key);
  }
}