import {
  calculatePercentage,
  calculateMacrosPercentage,
  calculateMacrosForProducts,
  calculateMacrosForMeals,
  calculateMacrosAmount,
  calculateDemandCoverage,
} from "../utils/calculators";

import { testProduct, testMeal } from "./mocks/items";

describe("Calculators", () => {
  const demandAmount = {
    kcal: 2000,
    protein: 200,
    carbs: 200,
    fat: 200,
  };

  const currentAmount = {
    kcal: 1000,
    protein: 100,
    carbs: 100,
    fat: 100,
  };

  test("Basic percentage", async () => {
    const result = calculatePercentage(5, 10);
    expect(result).toEqual(50);
  });

  test("Macro percentage", async () => {
    const result = calculateMacrosPercentage(demandAmount, currentAmount);
    expect(result).toEqual({ carbs: 50, fat: 50, kcal: 50, protein: 50 });
  });

  test("Macro amount", async () => {
    const result = calculateMacrosAmount(2000, 25, 50, 25);
    expect(result).toEqual({ kcal: 2000, protein: 125, carbs: 250, fat: 56 });
  });

  test("Macro for products", async () => {
    const result = calculateMacrosForProducts([testProduct, testProduct]);
    expect(result).toEqual({ kcal: 2, protein: 2, carbs: 2, fat: 2 });
  });

  test("Macro for meals", async () => {
    const result = calculateMacrosForMeals([testMeal, testMeal]);
    expect(result).toEqual({ kcal: 2, protein: 2, carbs: 2, fat: 2 });
  });

  test("Demand coverage", async () => {
    const result = calculateDemandCoverage(
      2000,
      { protein: 25, carbs: 50, fat: 25 },
      currentAmount,
      0
    );
    expect(result).toEqual({ kcal: 50, protein: 80, carbs: 40, fat: 179 });
  });
});
