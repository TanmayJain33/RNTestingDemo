import React, {useState} from 'react';
import {
  ScrollView,
  Alert,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {ButtonComponent} from './components/Button';
import {ErrorText, TextField} from './components/FormComponent';

export default function Login({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (email == '') {
      setError('Please enter your email address.');
    } else if (password == '') {
      setError('Please enter your password.');
    } else {
      setError('');
      Alert.alert('Login Successful');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{paddingVertical: 20}}
      style={{backgroundColor: '#fff'}}>
      <TextField
        label="Email"
        placeholder="john.doe@ecample.com"
        onChangeText={(email: React.SetStateAction<string>) => setEmail(email)}
        value={email}
        autoCapitalize="none"
      />
      <TextField
        label="Password"
        placeholder="***"
        secureTextEntry
        onChangeText={(password: React.SetStateAction<string>) =>
          setPassword(password)
        }
        value={password}
        autoCapitalize="none"
      />
      <ErrorText text={error} />
      <ButtonComponent
        testID="Login.Submit.Button"
        text="Submit"
        onPress={handleSubmit}
      />
      <View style={styles.textBlock}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={[styles.text, styles.link]}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textBlock: {marginTop: 20},
  text: {fontSize: 18, color: '#969696', textAlign: 'center', marginBottom: 2},
  link: {textDecorationLine: 'underline'},
});
