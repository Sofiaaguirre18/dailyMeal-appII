import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ModalContainer from './ui/ModalContainer';
import InputField from './ui/InputField';
import Button from './ui/Button';
import { useMealContext } from '../context/DailyMealContext';

function MealInput() {
  const { modalIsVisible, setModalIsVisible, addMeal } = useMealContext();
  
  const [enteredMealDate, setEnteredMealDate] = useState('');
  const [enteredMealTime, setEnteredMealTime] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [enteredMealText, setEnteredMealText] = useState('');

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Breakfast', value: 'Breakfast' },
    { label: 'Lunch', value: 'Lunch' },
    { label: 'Dinner', value: 'Dinner' },
    { label: 'Snack', value: 'Snack' },
  ]);

  function handleAddMeal() {
    addMeal(
      enteredMealDate,
      enteredMealTime,
      selectedCategory,
      enteredMealText
    );
    resetForm();
  }

  function resetForm() {
    setEnteredMealDate('');
    setEnteredMealTime('');
    setSelectedCategory('');
    setEnteredMealText('');
  }

  function cancelHandler() {
    setModalIsVisible(false);
    resetForm();
  }

  return (
    <ModalContainer visible={modalIsVisible}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/mochi-icon.png')}
          style={styles.image}
        />
        <Text style={styles.header}>Enter your meal below</Text>
        
        <InputField
          placeholder="Enter Date (MM-DD-YYYY)"
          onChangeText={(text) => setEnteredMealDate(text)}
          value={enteredMealDate}
        />
        
        <InputField
          placeholder="Enter Time (HH:MM)"
          onChangeText={(text) => setEnteredMealTime(text)}
          value={enteredMealTime}
        />

        <DropDownPicker
          open={open}
          value={selectedCategory}
          items={items}
          setOpen={setOpen}
          setValue={setSelectedCategory}
          setItems={setItems}
          style={styles.dropdown}
          placeholder="-- Select a category --"
          dropDownContainerStyle={styles.dropdownContainer}
        />

        <InputField
          placeholder="Type your meal here"
          onChangeText={(text) => setEnteredMealText(text)}
          value={enteredMealText}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Add Meal"
            onPress={handleAddMeal}
            style={styles.button}
          />
          <Button
            title="Cancel"
            onPress={cancelHandler}
            color="#FF4154"
            style={styles.button}
          />
        </View>
      </View>
    </ModalContainer>
  );
}

export default MealInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 330,
    height: 330,
    margin: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  dropdown: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 6,
    borderColor: '#ccc',
  },
  dropdownContainer: {
    width: '100%',
    borderRadius: 6,
    borderColor: '#ccc',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});