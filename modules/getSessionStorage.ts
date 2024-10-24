const getSessionStorage = (key: string, initialValue: any) => {
  const saved = sessionStorage.getItem(key);

  if (saved) {
    return JSON.parse(saved);
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  sessionStorage.setItem(key, JSON.stringify(initialValue));
  return initialValue;
};

const setSessionStorage = (key: string, value: string) => {
    console.log(`Setting session: ${value}`)
  sessionStorage.setItem(key, JSON.stringify(value));
};

export { getSessionStorage, setSessionStorage };
