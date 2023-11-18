/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import database from '@react-native-firebase/database';
import ItemComponent from '../../common/components/ItemComponent';

let itemsRef = database().ref('/items');

export default function ItemList() {
  const [itemsArray, setItemsArray] = React.useState([]);
  React.useEffect(() => {
    itemsRef.on('value', snapshot => {
      const key = snapshot.key;
      let data = snapshot.val();
      const items = Object.values(data);
      setItemsArray(items);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {itemsArray?.length > 0 ? (
          <ItemComponent items={itemsArray} />
        ) : (
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              padding: 20,
            }}>
            No items
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
});
