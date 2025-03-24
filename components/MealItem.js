import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './ui/Card';
import Button from './ui/Button';
import { useMealContext } from '../context/DailyMealContext';

function MealItem({ id, date, time, category, text }) {
  const { deleteMeal, startEditMeal } = useMealContext();


  const getCategoryColor = (category) => {
    switch (category) {
      case 'Breakfast':
        return '#FDBC42';
      case 'Lunch':
        return '#5BDB88';
      case 'Dinner':
        return '#D240E2';
      case 'Snack':
        return '#3A93CB';
      default:
        return '#FFFFFF';
    }
  };

  return (
    <Card style={styles.mealItem}>
      <View style={styles.mealInfo}>
        <Text style={[styles.category, { color: getCategoryColor(category) }]}>{category}</Text>
        <View style={styles.dateTime}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Edit"
          onPress={() => startEditMeal({ id, date, time, category, text })}
          style={styles.button}
        />
        <Button
          title="Delete"
          onPress={() => deleteMeal(id)}
          color="#FF4154"
          style={styles.button}
        />
      </View>
    </Card>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    marginVertical: 8,
  },
  mealInfo: {
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateTime: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  date: {
    marginRight: 10,
    color: '#555',
  },
  time: {
    color: '#555',
  },
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: 10,
    minWidth: 80,
  },
});