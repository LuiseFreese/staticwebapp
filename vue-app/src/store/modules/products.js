import { GET_PRODUCTS } from './mutation-types';

const captains = console;

const data = {
  products: [
    {
      id: 10,
      name: '🫚 Ginger',
      description: `1kg of preferably organic ginger, cut into slices that your blender can handle`,
      quantity: '1',
    },
    {
      id: 20,
      name: '🍋 Lemon juice',
      description: 'squeeze 2 lemons, take care to not include seeds',
      quantity: 2,
    },
    {
      id: 30,
      name: '🍊 Orange juice',
      description: '300ml of freshly squeezed orange juice',
      quantity: 1,
    },
    {
      id: 40,
      name: '🤌 Kurkuma',
      description: '2 teaspoons of kurkuma powder',
      quantity: 1,
    },
    {
      id: 50,
      name: '➕ Add a little spice: some pepper',
      description: 'goes well with Kurkuma',
      quantity: 1,
    },
    {
      id: 60,
      name: '🍯 Honey',
      description: `a few tablespoons of honey will take away the bitterness of the Kurkuma`,
      quantity: 1,
    },
  ],
};
export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    [GET_PRODUCTS](state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProductsAction({ commit }) {
      try {
        commit(GET_PRODUCTS, data.products);
        return data.products;
      } catch (error) {
        captains.error(error);
      }
    },
  },
  getters: {
    products: (state) => state.products,
  },
};
