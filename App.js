import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  // if (state.isLoading) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          // showIcon: true,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{
    //       headerShown: false,
    //       animation: 'slide_from_right',
    //     }}>
    //     {/* {isSignedIn ? (
    //       <> */}
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     {/* <Stack.Screen name="Profile" component={ProfileScreen} />
    //         <Stack.Screen name="Settings" component={SettingsScreen} />
    //       </>
    //     ) : (
    //       <>
    //         <Stack.Screen name="SignIn" component={SignInScreen} />
    //         <Stack.Screen name="SignUp" component={SignUpScreen} />
    //       </>
    //     )} */}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;

// "react-android": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && react-native run-android",
//     "clean:android": "cd android && ./gradlew clean && cd ../",
