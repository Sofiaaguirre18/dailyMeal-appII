import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ModalContainer from './ui/ModalContainer';
import InputField from './ui/InputField';
import Button from './ui/Button';
import { useMealContext } from '../context/DailyMealContext';

function EditMealForm() {
  const { editModalIsVisible, setEditModalIsVisible, mealToEdit, updateMeal } = useMealContext();

  const [mealText, setMealText] = useState('');
  const [category, setCategory] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const [openCategory, setOpenCategory] = useState(false);
  const [categories, setCategories] = useState([
    { label: 'Breakfast', value: 'Breakfast' },
    { label: 'Lunch', value: 'Lunch' },
    { label: 'Dinner', value: 'Dinner' },
    { label: 'Snack', value: 'Snack' },
  ]);

  // Update form when mealToEdit changes
  useEffect(() => {
    if (mealToEdit) {
      setMealText(mealToEdit.text || '');
      setCategory(mealToEdit.category || '');
      setTime(mealToEdit.time || '');
      setDate(mealToEdit.date || '');
    }
  }, [mealToEdit]);

  const handleSave = () => {
    updateMeal({
      id: mealToEdit?.id,
      text: mealText,
      category,
      time,
      date,
    });
  };

  const handleClose = () => {
    setEditModalIsVisible(false);
  };

  return (
    <ModalContainer visible={editModalIsVisible}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/mochi-icon.png')}
          style={styles.image}
        />
        <Text style={styles.header}>Edit Meal</Text>
        
        <InputField
          placeholder="Date (MM-DD-YYYY)"
          value={date}
          onChangeText={setDate}
        />

        <InputField
          placeholder="Time (HH:MM)"
          value={time}
          onChangeText={setTime}
        />

        <DropDownPicker
          open={openCategory}
          value={category}
          items={categories}
          setOpen={setOpenCategory}
          setValue={setCategory}
          setItems={setCategories}
          placeholder="-- Select a category --"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />
        
        <InputField
          placeholder="Type your meal here"
          value={mealText}
          onChangeText={setMealText}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Update"
            onPress={handleSave}
            style={styles.button}
          />
          <Button
            title="Cancel"
            onPress={handleClose}
            color="#FF4154"
            style={styles.button}
          />
        </View>
      </View>
    </ModalContainer>
  );
}

export default EditMealForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 330,
    height: 330,
    margin: 20,
  },
  dropdown: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  dropdownContainer: {
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});