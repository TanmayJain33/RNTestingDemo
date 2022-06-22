import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

export const TextField = ({label, ...props}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textfield}
        placeholderTextColor="#828282"
        {...props}
      />
    </View>
  );
};

export const ErrorText = ({text}: any) => {
  return <Text style={styles.errorText}>{text}</Text>;
};

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e4',
    marginBottom: 11,
  },
  label: {color: '#4a4a4a', fontSize: 18, fontWeight: '600', marginBottom: 7},
  textfield: {
    fontSize: 18,
    fontWeight: '400',
    color: '#828282',
    marginBottom: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 20,
  },
});
