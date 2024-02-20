import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import {SaveProfileData, WaitingForm} from '../../../../components';

export const SaveEditProfileScreen = ({navigation}) => {
  const data = {
    ...SaveProfileData,
    navigation,
  };

  return (
    <View style={styles.container}>
      <WaitingForm data={data} />
    </View>
  );
};
