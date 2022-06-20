import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function AddList({value, onChange, onPressAdd}) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder="New Todo..."
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.addButton} onPress={onPressAdd}>
        <Text style={styles.buttonStyles}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    width: 275,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  addButton: {
    backgroundColor: 'rgb(130, 170, 255)',
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginLeft: 15,
  },
  buttonStyles: {
    color: '#fff',
    fontSize: 32,
  },
});
