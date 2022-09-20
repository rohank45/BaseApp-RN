import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../constants/colors';

const PrimaryButton = props => {
  return (
    <TouchableOpacity
      style={{
        ...styles.btnContainer,
        opacity: props.disabled ? 0.5 : 1,
        ...props.containerStyle,
      }}
      onPress={props.pressHandler}
      disabled={props.disabled}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary_color,
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
  },
});

export default PrimaryButton;
