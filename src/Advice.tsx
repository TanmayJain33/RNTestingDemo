import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {fetchData} from './fetchData';

export default function Advice() {
  const [advice, setAdvice] = useState('');

  const getAdvice = async () => {
    const data = await fetchData();
    setAdvice(data.advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  const onGetNewAdvice = useCallback(() => {
    getAdvice();
  }, [getAdvice]);

  return (
    <>
      <SafeAreaView style={styles.scrollView}>
        <View style={styles.root}>
          <View>
            <Text style={styles.title}>Your Advice: </Text>
            <Text style={styles.advice}>{advice}</Text>
          </View>
          <TouchableOpacity
            onPress={onGetNewAdvice}
            style={[styles.buttonContainer, styles.button]}>
            <Text style={styles.buttonTitle}>Get another advice!</Text>
          </TouchableOpacity>
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
  title: {
    fontSize: 16,
  },
  advice: {
    color: '#d50000',
    borderRadius: 20,
    fontSize: 24,
    marginVertical: 30,
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 25,
    backgroundColor: '#000',
  },
  buttonTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
  },
});
