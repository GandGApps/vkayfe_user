import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import {globalStyles, SignInName} from '../../../constants';
import {chooseData, WaitingForm} from '../../../components';

export const ChooseScreen = ({navigation}) => {
  const onPressMainBtn = () => navigation.navigate(SignInName);
  const data = {
    navigation,
    onPressMainBtn,
    ...chooseData,
  };
  return (
    <View style={globalStyles.container}>
      <WaitingForm data={data} />
    </View>
  );
};
