/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

//const,var,let
const FRUIT_ARRAY = [
  {
    id: 1,
    name: 'Mango',
    image:
      'https://static.toiimg.com/thumb/90941559.cms?width=680&height=512&imgsize=71312',
  },
  {
    id: 2,
    name: 'Apple',
    image:
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/perfect-organic-apples-jorge-moro.jpg',
  },
  
];

const FlatListScreen = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const renderFruitsName = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => alert(JSON.stringify(item))}>
        <View
          style={{
            height: 150,
            backgroundColor: 'pink',
            borderColor: 'red',
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 20}}>
            {item?.name}
          </Text>
          <Image
            style={{width: 100, height: 100}}
            source={{
              uri: item.image,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderFruitsNameHorizontal = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => alert(JSON.stringify(item))}>
        <View
          style={{
            height: 150,
            width: 150,
            backgroundColor: 'pink',
            borderColor: 'red',
            borderWidth: 1,
            justifyContent: 'center',
            margin: 20,
          }}>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 20}}>
            {item?.name}
          </Text>
          <Image
            style={{
              width: 100,
              height: 100,
              justifyContent: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              marginTop: 10,
            }}
            source={{
              uri: item.image,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const EmptyView = () => {
    return <Text>No Data Found</Text>;
  };
  const HeaderView = () => {
    return <Text>Header title</Text>;
  };
  const FooterView = () => {
    return <Text>Footer title</Text>;
  };


  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={'large'} style={{color: 'black'}} />
      ) : null}

      <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20}}>
        Flat List Example
      </Text>

      {/* <FlatList
        data={FRUIT_ARRAY}
        renderItem={renderFruitsName}
        // renderItem={item => (
        //   <View
        //     style={{
        //       height: 150,
        //       backgroundColor: 'gray',
        //       borderColor: 'red',
        //       borderWidth: 1,
        //     }}>
        //     <Text style={{textAlign: 'center'}}>{item?.item?.name}</Text>
        //   </View>
        // )}
        keyExtractor={data => data.id.toString()}
        extraData={FRUIT_ARRAY}
      /> */}
      {/* {//HORIZONTAL FLAT LIST} */}

      {isLoading ? null : (
        <FlatList
          //horizontal
          //numColumns={2}
          data={FRUIT_ARRAY}
          renderItem={renderFruitsNameHorizontal}
          keyExtractor={data => data.id.toString()}
          extraData={FRUIT_ARRAY}
          initialNumToRender={10}
          ListEmptyComponent={EmptyView}
          ListHeaderComponent={HeaderView}
          ListFooterComponent={FooterView}
        />
      )}
    </View>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({});
