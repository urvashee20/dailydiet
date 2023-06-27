export const testProduct = {
  nutrients: {
    kcal: 1,
    protein: 1,
    carbs: 1,
    fat: 1,
  },
  _id: "testproductID",
  title: "testproduct",
  category: "testcategory",
  amount: 1,
  creator: "testuserID",
  createdAt: "31/12/9999",
  private: false,
};

export const testMeal = {
  nutrients: {
    kcal: 1,
    protein: 1,
    carbs: 1,
    fat: 1,
  },
  _id: "testmealID",
  title: "[Meal] testmeal",
  products: [
    {
      nutrients: {
        kcal: 1,
        protein: 1,
        carbs: 1,
        fat: 1,
      },
      _id: "2",
      title: "testproduct",
      category: "meat",
      amount: 200,
      creator: "testuser",
      createdAt: "31/12/9999",
      private: false,

      id: "test-id",
    },
  ],
  creator: "testuserID",
  createdAt: "31/12/9999",
  private: false,
};

export const testDiary = {
  nutrients: {
    kcal: 1,
    protein: 1,
    carbs: 1,
    fat: 1,
  },
  ratingPublic: {
    average: 1,
    rates: 1,
  },
  _id: "testdiaryID",
  title: "testdiary",
  id: "testdiaryID",
  meals: [
    {
      nutrients: {
        kcal: 1,
        protein: 1,
        carbs: 1,
        fat: 1,
      },
      _id: "1",
      title: "[Meal] testmeal",
      products: [
        {
          nutrients: {
            kcal: 1,
            protein: 1,
            carbs: 1,
            fat: 1,
          },
          _id: "2",
          title: "testproduct",
          category: "meat",
          amount: 200,
          creator: "testuserID",
          createdAt: "31/12/9999",
          private: false,
          __v: 0,
          id: "test-id",
        },
      ],
      creator: "testuser",
      createdAt: "31/12/9999",
      private: false,
    },
  ],
  calorieAdjustment: 0,
  creator: "iestuserID",
  createdAt: "31/12/9999",
  private: false,
};
