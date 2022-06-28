import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Input, FormButton, ErrorText} from './components/FormComponent';

const useLoginFormState = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);

  let isEmailValid = false;
  let isPasswordValid = false;

  if (email !== '') {
    isEmailValid = true;
  }

  if (password !== '') {
    isPasswordValid = true;
  }

  return {
    email: {
      value: email,
      set: setEmail,
      valid: isEmailValid,
    },
    password: {
      value: password,
      set: setPassword,
      valid: isPasswordValid,
    },
    submit: {
      value: submit,
      set: () => {
        setSubmit(true);
        if (isEmailValid && isPasswordValid) {
          Alert.alert('Login successfull');
        }
      },
    },
  };
};

export default function Login({navigation}: any) {
  const {email, password, submit} = useLoginFormState();

  let emailErrorMsg: any;
  let passwordErrorMsg: any;

  if (submit.value && !email.valid) {
    emailErrorMsg = 'Invalid email.';
  }

  if (submit.value && !password.valid) {
    passwordErrorMsg = 'Invalid password.';
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <Text style={styles.headerText}>Login</Text>
      <Input
        label="Email"
        placeholder="john.doe@example.com"
        onChangeText={email.set}
        error={emailErrorMsg}
      />
      <Input
        label="Password"
        placeholder="***"
        onChangeText={password.set}
        error={passwordErrorMsg}
      />
      <ErrorText messages={[emailErrorMsg, passwordErrorMsg]} />
      <FormButton text="Login" onPress={submit.set} />
      <View style={styles.textBlock}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={[styles.text, styles.link]}>Create Account</Text>
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
