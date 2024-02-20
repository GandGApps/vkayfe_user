import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../../../components';
import {Colors} from '../../../../constants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: globalHeight(20),
  },
  content: {
    paddingLeft: globalWidth(28),
    paddingVertical: globalHeight(25),
    borderBottomColor: Colors.borderGray,
    borderBottomWidth: 1,
  },
  textContainer: {
    marginBottom: globalHeight(10),
  },
  footerDataStatus: {
    marginTop: globalHeight(20),
    paddingLeft: globalWidth(28),
  },
});
