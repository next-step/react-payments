declare global {
  interface Crypto {
    randomUUID: () => string
  }
}

console.log(crypto.randomUUID())

export {}
