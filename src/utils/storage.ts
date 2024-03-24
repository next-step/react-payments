type Storage = 'localStorage' | 'sessionStorage'

type GetItemFromStateParams<T> = {
  storage?: Storage
  key: string
  defaultValue: T
}

type SetItemFromStateParams<T> = {
  storage?: Storage
  key: string
  value: T
}

export const getItemFromStorage = <T>({
  storage = 'sessionStorage',
  key,
  defaultValue
}: GetItemFromStateParams<T>): T => {
  const data = window[storage].getItem(key)

  try {
    if (!data) {
      return defaultValue
    }

    return JSON.parse(data)
  } catch (e) {
    return (window[storage].getItem(key) as T) || defaultValue
  }
}

export const setItemToStorage = <T>({
  storage = 'sessionStorage',
  key,
  value
}: SetItemFromStateParams<T>) => {
  const item = JSON.stringify(value)
  window[storage].setItem(key, item)
}
