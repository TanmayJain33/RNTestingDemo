import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ErrorText, Input, FormButton} from './components/FormComponent';

const useCreateAccountFormState = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submit, setSubmit] = useState(false);

  let isEmailValid = false;
  let isFirstNameValid = false;
  let isLastNameValid = false;
  let isPasswordValid = false;
  let isConfirmPasswordValid = false;

  if (email !== '') {
    isEmailValid = true;
  }
  if (firstName !== '') {
    isFirstNameValid = true;
  }
  if (lastName !== '') {
    isLastNameValid = true;
  }
  if (password !== '') {
    isPasswordValid = true;
  }
  if (confirmPassword !== '' && confirmPassword == password) {
    isConfirmPasswordValid = true;
  }

  return {
    email: {
      value: email,
      set: setEmail,
      valid: isEmailValid,
    },
    firstName: {
      value: firstName,
      set: setFirstName,
      valid: isFirstNameValid,
    },
    lastName: {
      value: lastName,
      set: setLastName,
      valid: isLastNameValid,
    },
    password: {
      value: password,
      set: setPassword,
      valid: isPasswordValid,
    },
    confirmPassword: {
      value: confirmPassword,
      set: setConfirmPassword,
      valid: isConfirmPasswordValid,
    },
    submit: {
      value: submit,
      set: () => {
        setSubmit(true);
        if (isEmailValid && isPasswordValid) {
          Alert.alert('Account created successfully.');
          navigation.navigate('Login');
        }
      },
    },
  };
};

export default function CreateAccount({navigation}: any) {
  const {email, firstName, lastName, password, confirmPassword, submit} =
    useCreateAccountFormState({navigation});

  let emailErrorMsg: any;
  let firstNameErrorMsg: any;
  let lastNameErrorMsg: any;
  let passwordErrorMsg: any;
  let confirmPasswordErrorMsg: any;

  if (submit.value && !email.valid) {
    emailErrorMsg = 'Invalid email.';
  }
  if (submit.value && !firstName.valid) {
    firstNameErrorMsg = 'Invalid first name.';
  }
  if (submit.value && !lastName.valid) {
    lastNameErrorMsg = 'Invalid last name.';
  }
  if (submit.value && !password.valid) {
    passwordErrorMsg = 'Invalid password.';
  }
  if (submit.value && !confirmPassword.valid) {
    confirmPasswordErrorMsg = 'Password does not match.';
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <Text style={styles.headerText}>Create Account</Text>
      <Input label="Email" onChangeText={email.set} error={emailErrorMsg} />
      <Input
        label="First Name"
        onChangeText={firstName.set}
        error={firstNameErrorMsg}
      />
      <Input
        label="Last Name"
        onChangeText={lastName.set}
        error={lastNameErrorMsg}
      />
      <Input
        label="Password"
        onChangeText={password.set}
        error={passwordErrorMsg}
      />
      <Input
        label="Confirm Password"
        onChangeText={confirmPassword.set}
        error={confirmPasswordErrorMsg}
      />
      <ErrorText
        messages={[
          emailErrorMsg,
          firstNameErrorMsg,
          lastNameErrorMsg,
          passwordErrorMsg,
          confirmPasswordErrorMsg,
        ]}
      />
      <FormButton text="Create Account" onPress={submit.set} />
      <View style={styles.textBlock}>
        <Text style={styles.text}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.text, styles.link]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  headerText: {
    color: '#353031',
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 10,
  },
  textBlock: {marginTop: 20},
  text: {fontSize: 14, color: '#353031', textAlign: 'center', marginBottom: 2},
  link: {textDecorationLine: 'underline'},
});
