import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import axios from 'axios';

export const API = 'https://api.adviceslip.com/advice';

export default function Home() {
  const [advice, setAdvice] = useState('');

  const getAdvice = useCallback(async () => {
    axios.get(API).then(res => setAdvice(res.data.slip.advice));
  }, []);

  useEffect(() => {
    getAdvice();
  }, [getAdvice]);

  const onGetNewAdvice = useCallback(() => {
    getAdvice();
  }, [getAdvice]);

  return (
    <>
      <SafeAreaView style={styles.scrollView}>
        <View style={styles.root}>
          <View>
            <Text h4>Your Advice: </Text>
            <Text h2 style={styles.advice}>
              {advice}
            </Text>
          </View>
          <Button
            title="Get another advice!"
            onPress={onGetNewAdvice}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fffde7',
  },
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  advice: {
    color: '#d50000',
    borderRadius: 20,
    marginVertical: 30,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 25,
    backgroundColor: '#000',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 22,
  },
});
