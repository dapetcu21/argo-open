class LocalStorage {
  get(key) {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (ex) {
      return undefined;
    }
  }

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key) {
    window.localStorage.removeItem(key);
  }
}

export default new LocalStorage();
