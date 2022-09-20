import React from 'react';
import {Text, View} from 'react-native';

const HomeScreen = () => {
  // model.id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <Text style={{color: 'white', fontSize: 30}}>Mali sir, Welcome</Text>
    </View>
  );
};

export default HomeScreen;
