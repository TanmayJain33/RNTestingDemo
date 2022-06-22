import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import {ButtonComponent} from './components/Button';
import {ErrorText, TextField} from './components/FormComponent';

export default function Login({navigation}: any) {
  return (
    <ScrollView
      contentContainerStyle={{paddingVertical: 20}}
      style={{backgroundColor: '#fff'}}>
      <TextField label="Email" placeholder="john.doe@ecample.com" />
      <TextField label="First Name" placeholder="John" />
      <TextField label="Last Name" placeholder="Doe" />
      <TextField label="Password" secureTextEntry />
      <TextField label="Confirm Password" secureTextEntry />
      <ErrorText text="" />
      <ButtonComponent text="Submit" onPress={() => Alert.alert('todo')} />
      <View style={styles.textBlock}>
        <Text style={styles.text}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.text, styles.link]}>Sign In</Text>
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
