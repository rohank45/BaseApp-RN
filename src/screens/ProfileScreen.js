import React from 'react';
import {Text, View} from 'react-native';

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'black',
      }}>
      <Text style={{color: 'black', fontSize: 30}}>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
