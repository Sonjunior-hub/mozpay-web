export const storage = {
  get<T>(key: string): T | null {
    const value = localStorage.getItem(key);

    if (!value) return null;

    return JSON.parse(value);
  },

  set(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
};