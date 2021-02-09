let store = undefined;
const storeProvider = {
  init: (configureStore) => {
    store = configureStore();
  },
  getStore: () => store,
};

export default storeProvider;
