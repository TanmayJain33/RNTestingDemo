import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ListItem from './ListItem';

export default function ItemsList({data, onDelete}) {
  const renderFunction = ({item}) => (
    <ListItem style={styles.listItemStyles} item={item} onDelete={onDelete} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderFunction}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  listItemStyles: {
    marginVertical: 3,
  },
});
