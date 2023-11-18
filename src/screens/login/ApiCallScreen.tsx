/* eslint-disable react-native/no-inline-styles */
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
// const countryArray = ['INDIA', 'AUS', 'NEWZILAND'];

const ApiCallScreen = () => {
  const [countryArray, setCountryArray] = useState([]);

  //   useEffect(() => {
  //     fetch('https://restcountries.com/v3.1/all')
  //       .then(data => {
  //         return data.json();
  //       })
  //       .then(update => {
  //         console.log(update);
  //         setCountryArray(update);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   }, []);


  useEffect(() => {
    getCountryName();
  }, []);

  const getCountryName = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      console.log('Axios', response);
      setCountryArray(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderCountryArray = item => {
    return (
      <View>
        <Text
          style={{
            color: 'red',
            fontSize: 30,
            textAlign: 'center',
            padding: 10,
          }}>
          {item.item.name.common}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {countryArray.length <= 0 && <ActivityIndicator size={'large'} />}
      <Text style={{color: 'blue', fontSize: 20, textAlign: 'center'}}>
        Country Name
      </Text>
      <FlatList
        data={countryArray}
        renderItem={renderCountryArray}
        keyExtractor={data => data.name.common.toString()}
        extraData={countryArray}
        initialNumToRender={10}
      />
    </View>
  );
};

export default ApiCallScreen;
