import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import MealItem from './MealItem';
import { useMealContext } from '../context/DailyMealContext';

const MealList = () => {
  const { meals } = useMealContext();

  if (meals.length === 0) {
    return <Text style={styles.emptyText}>No meals added yet.</Text>;
  }

  return (
    <FlatList
      data={meals}
      renderItem={({ item }) => (
        <MealItem
          id={item.id}
          date={item.date}
          time={item.time}
          category={item.category}
          text={item.text}
        />
      )}
      keyExtractor={(item) => item.id}
      style={styles.list}
    />
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 20,
  },
});