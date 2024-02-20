import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../../../components';
import {Colors} from '../../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.backgroundBLightBlue,
    paddingVertical: globalHeight(16),
  },

  headerContent: {
    marginTop: globalHeight(22),
    marginBottom: globalHeight(10),
  },

  filterTextStyle: {
    marginRight: globalWidth(14),
  },
});
