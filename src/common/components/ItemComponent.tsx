/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import database from '@react-native-firebase/database';

export default function ItemComponent({items}: any) {
  const onDelete = async () => {
    await database().ref('/items/-NjWacFmh0wiEuNwIBHs').remove();
  };

  return (
    <View style={styles.itemsList}>
      {items?.map(
        (
          item: {
            name:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined;
          },
          index: React.Key | null | undefined,
        ) => {
          return (
            <TouchableOpacity onPress={onDelete}>
              <View
                style={{backgroundColor: 'blue', marginVertical: 20}}
                key={index}>
                <Text style={styles.itemtext}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    padding: 20,
  },
});
