import React, { createContext, useContext, useState } from 'react';

const DailyMealContext = createContext();

export const useMealContext = () => useContext(DailyMealContext);

export const DailyMealProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [editModalIsVisible, setEditModalIsVisible] = useState(false);
  const [mealToEdit, setMealToEdit] = useState(null);

  const addMeal = (enteredMealDate, enteredMealTime, selectedCategory, enteredMealText) => {
    setMeals((currentMeals) => [
      ...currentMeals,
      {
        date: enteredMealDate,
        time: enteredMealTime,
        category: selectedCategory,
        text: enteredMealText,
        id: Math.random().toString(),
      },
    ]);
    setModalIsVisible(false);
  };

  const deleteMeal = (id) => {
    setMeals((currentMeals) => {
      return currentMeals.filter((meal) => meal.id !== id);
    });
  };

  const updateMeal = (updatedMeal) => {
    setMeals((currentMeals) =>
      currentMeals.map((meal) =>
        meal.id === updatedMeal.id ? { ...meal, ...updatedMeal } : meal
      )
    );
    setEditModalIsVisible(false);
  };

  const startEditMeal = (meal) => {
    setMealToEdit(meal);
    setEditModalIsVisible(true);
  };

  return (
    <DailyMealContext.Provider
      value={{
        meals,
        modalIsVisible,
        editModalIsVisible,
        mealToEdit,
        setModalIsVisible,
        setEditModalIsVisible,
        addMeal,
        deleteMeal,
        updateMeal,
        startEditMeal,
      }}
    >
      {children}
    </DailyMealContext.Provider>
  );
};
