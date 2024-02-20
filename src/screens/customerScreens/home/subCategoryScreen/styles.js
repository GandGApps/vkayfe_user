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
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: globalHeight(21),
    marginBottom: globalHeight(7),
    marginHorizontal: globalWidth(20),
    paddingVertical: globalHeight(13),
    paddingHorizontal: globalWidth(19),
  },
  img: {
    width: globalWidth(68),
    height: globalWidth(68),
    marginRight: globalWidth(13),
  },
});
