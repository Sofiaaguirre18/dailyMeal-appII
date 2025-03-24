import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { DailyMealProvider } from './context/DailyMealContext';
import MealInput from './components/MealInput';
import EditMeal from './components/EditMeal';
import MealList from './components/MealList';
import Button from './components/ui/Button';
import { useMealContext } from './context/DailyMealContext';

// Component that uses the MealContext
const MealPlannerContent = () => {
  const { setModalIsVisible } = useMealContext();

  function startAddMealHandler() {
    setModalIsVisible(true);
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.titleContainer}>DAILY MEAL PLAN</Text>
      <Image
        source={require('./assets/daily-meal-icon.png')}
        style={styles.image}
      />
      
      <Button
        title="Add Meal Plan"
        onPress={startAddMealHandler}
        style={styles.addButton}
      />
      
      <MealInput />
      <EditMeal />

      <ScrollView style={styles.mealsListContainer}>
        <View style={styles.mealsContainer}>
          <MealList />
        </View>
      </ScrollView>
    </View>
  );
};

// Main App component that wraps everything in the context provider
export default function App() {
  return (
    <DailyMealProvider>
      <MealPlannerContent />
    </DailyMealProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#FFF7E6',
  },
  mealsListContainer: {
    borderColor: 'pink',
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
    backgroundColor: '#FFD0EA',
    marginBottom: 30,
  },
  mealsContainer: {
    flex: 5,
    marginTop: 5,
    padding: 5,
  },
  titleContainer: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'sans-serif',
    marginTop: 30,
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    margin: 20,
  },
  addButton: {
    alignSelf: 'center',
    width: 200,
  },
});