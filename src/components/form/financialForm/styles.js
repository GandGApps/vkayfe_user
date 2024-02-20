import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../constants';
import {globalHeight, globalWidth} from '../../index';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  containerForm: {
    borderWidth: 1,
    borderBottomColor: Colors.gray,
    paddingVertical: globalHeight(14),
    borderRadius: 8,
    marginVertical: globalHeight(5),
    marginHorizontal: globalWidth(15),
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: globalWidth(10),
  },
  textPod: {
    fontSize: globalWidth(12),
    textDecorationLine: 'underline',
  },
  centerView: {
    marginBottom: globalHeight(30),
    marginTop: globalHeight(12),
  },
});
