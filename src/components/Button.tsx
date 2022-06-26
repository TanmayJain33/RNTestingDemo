import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export function ButtonComponent({text, onPress, disabled = false, style = {}}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, disabled && styles.buttonLoading, style]}
      disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d22322',
    paddingVertical: 10,
    paddingHorizontal: 45,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonLoading: {backgroundColor: '#e58e8d'},
  text: {fontWeight: '500', fontSize: 18, color: '#fff'},
});
