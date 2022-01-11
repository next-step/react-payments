export default {
  plugins: ['@snowpack/plugin-typescript'],
  mount: {
    public: '/',
    src: '/dist',
  },
}
