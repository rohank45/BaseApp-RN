import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {IntroImage} from '../../constants/ImageConstants';
import {
  _ACTUAL_DEVICE_HEIGHT,
  _ACTUAL_DEVICE_WIDTH,
} from '../../constants/dimens';
import {colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CarouselIndicator from '../CarouselIndicator';
import mainStyles from '../../assets/styles/main';
import PrimaryButton from '../PrimaryButton';

const IntroOneScreenDemo = ({navigation}) => {
  return (
    <View style={mainStyles.container}>
      <View>
        <Text style={mainStyles.h3}>{`Find Home Care Givers`}</Text>
        <Text style={mainStyles.p}>
          Find nurses / brothers at the tip of your fingers easily and at your
          preferred time!
        </Text>
      </View>
      <View>
        <Image
          source={IntroImage.introOne}
          style={{
            height: 250,
            width: _ACTUAL_DEVICE_WIDTH * 0.9,
          }}
          resizeMode={'stretch'}
        />
        <View
          style={{
            width: '100%',
            marginTop: 10,
          }}>
          <CarouselIndicator active={1} />
        </View>
      </View>
      {/* <View
        style={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            width:'100%'
        }}>
          <PrimaryButton
            pressHandler={() => {
              console.log('Button Pressed');
              navigation.navigate('IntroTwo', {
              });
            }}
          >
            <Text
              style={{
                color: colors.white_color,
                marginRight:10,
                fontSize:15
              }}>
              NEXT 
            </Text>
            <Icon name="arrow-right" size={20} color={colors.white_color} />
          </PrimaryButton>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({});
export default IntroOneScreenDemo;
