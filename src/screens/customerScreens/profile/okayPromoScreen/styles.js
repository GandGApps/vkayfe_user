import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../constants';
import {globalHeight, globalWidth} from '../../../../components';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    marginTop: globalHeight(14),
  },
  containerForm: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: globalHeight(51),
    justifyContent: 'space-between',
    marginBottom: globalHeight(7),
    paddingVertical: globalHeight(13),
    paddingHorizontal: globalWidth(19),
  },
  img: {
    width: globalWidth(68),
    height: globalWidth(68),
    marginRight: globalWidth(13),
  },
});
