import {WaitingName} from '../../constants';
import {approvedData, deniedData, pendingData} from '../../components';
import {Alert} from 'react-native';

export const checkUser = (res, navigation, title) => {
  let data = {};
  switch (res?.status) {
    case 'pending':
      if (title) {
        Alert.alert('', title);
      }
      data = pendingData;
      break;
    case 'approved':
      data = approvedData;
      break;
    case 'denied':
      data = deniedData;
      break;
  }
  navigation.replace(WaitingName, {data});
};
