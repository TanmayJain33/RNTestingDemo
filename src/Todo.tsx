import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function Todo() {
  const [todos, setTodos] = useState([{text: 'item1', key: '1'}]);
  const [text, setText] = useState('');

  const changeHandler = (val: string) => {
    setText(val);
  };

  const pressHandler = (key: string) => {
    setTodos(todos.filter(todo => todo.key != key));
  };

  const submitHandler = (text: string) => {
    setTodos([{text: text, key: Math.random().toString()}, ...todos]);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={styles.inputArea}>
          <View style={styles.addContent}>
            <TextInput
              style={styles.input}
              placeholder="New Todo..."
              onChangeText={changeHandler}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => submitHandler(text)}>
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listArea}>
          <View style={styles.itemContainer}>
            <FlatList
              data={todos}
              renderItem={({item}) => {
                return (
                  <View style={styles.listContainer}>
                    <View style={styles.textArea}>
                      <Text
                        adjustsFontSizeToFit
                        style={{marginLeft: 15, fontSize: 16}}>
                        {item.text}
                      </Text>
                    </View>
                    <View style={styles.buttonArea}>
                      <TouchableOpacity
                        onPress={() => pressHandler(item.key)}
                        style={styles.button}>
                        <Text style={{color: '#fff', fontSize: 20}}>X</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  inputArea: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  listArea: {
    flex: 8,
    paddingTop: 20,
    alignItems: 'center',
    marginVertical: 15,
    width: '80%',
  },
  addContent: {
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
  addText: {
    color: '#fff',
    fontSize: 32,
  },
  itemContainer: {
    width: '100%',
  },
  listContainer: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 15,
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    borderRadius: 5,
    marginVertical: 3,
  },
  textArea: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonArea: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});
