import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const Input = ({label, error, ...props}) => {
  const containerStyle = [styles.inputContainer];
  if (error) {
    containerStyle.push(styles.inputContainerError);
  }
  return (
    <View style={containerStyle}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.row}>
        <TextInput autoCapitalize="none" style={styles.input} {...props} />
      </View>
    </View>
  );
};

export const FormButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const ErrorText = ({messages}: any) => {
  const displayMessages = messages.filter(
    (msg: undefined) => msg !== undefined,
  );

  return (
    <View style={styles.errorContainer}>
      {displayMessages.map((msg: {} | any) => (
        <Text key={msg} style={styles.errorText}>
          {msg}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#f4f6f8',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#f4f6f8',
  },
  inputContainerError: {
    backgroundColor: '#f4f6f8',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#cc0011',
  },
  inputLabel: {
    fontSize: 14,
    color: '#b4b6b8',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    color: '#353031',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 3,
    marginRight: 10,
    flex: 1,
  },
  button: {
    backgroundColor: '#9374b7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorContainer: {
    paddingVertical: 10,
  },
  errorText: {
    fontSize: 14,
    color: '#cc0011',
  },
});
