const data = {
  products: [
    {
      id: 10,
      name: '🫚 Ginger',
      description: '1kg of preferably organic ginger, cut into slices that your blender can handle',
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
      description: 'goes well with Kurkuma'
      quantity: 1,
    },
    {
      id: 60,
      name: '🍯 Honey',
      description: 'a few Tablespoons of honey will take away the bitterness of the Kurkuma',
      quantity: 1,
    },
  ],
};

export const loadProductsApi = async () => {
  return data.products;
};
